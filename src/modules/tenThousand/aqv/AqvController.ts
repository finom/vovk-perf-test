import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqv")
export default class AqvController {
  @operation({
    summary: "Get Aqv",
  })
  @get()
  static getAqv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqv",
  })
  @post("{id}")
  static createAqv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
