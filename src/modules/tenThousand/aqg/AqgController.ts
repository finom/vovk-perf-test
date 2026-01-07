import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqg")
export default class AqgController {
  @operation({
    summary: "Get Aqg",
  })
  @get()
  static getAqg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqg",
  })
  @post("{id}")
  static createAqg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
