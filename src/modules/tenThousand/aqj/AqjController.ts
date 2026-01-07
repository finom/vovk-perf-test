import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqj")
export default class AqjController {
  @operation({
    summary: "Get Aqj",
  })
  @get()
  static getAqj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqj",
  })
  @post("{id}")
  static createAqj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
