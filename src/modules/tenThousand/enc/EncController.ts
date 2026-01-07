import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enc")
export default class EncController {
  @operation({
    summary: "Get Enc",
  })
  @get()
  static getEnc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enc",
  })
  @post("{id}")
  static createEnc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
