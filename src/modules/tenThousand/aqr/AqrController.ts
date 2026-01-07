import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqr")
export default class AqrController {
  @operation({
    summary: "Get Aqr",
  })
  @get()
  static getAqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqr",
  })
  @post("{id}")
  static createAqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
