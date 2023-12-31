import {getModelForClass, prop} from "@typegoose/typegoose";

export class Shop {
  @prop({ unique: true, required: true })
  public domain!: string;

  @prop({ required: true })
  public sessionId!: string;

  @prop({ required: true })
  public state!: string;

  @prop({ required: true })
  public isOnline!: boolean;

  @prop({ required: true })
  public scope!: string;

  @prop({ required: false })
  public expires?: Date;

  @prop({ required: true })
  public accessToken!: string;
}

export const ShopModel = getModelForClass(Shop);
