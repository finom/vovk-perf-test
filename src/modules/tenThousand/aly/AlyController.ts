import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aly")
export default class AlyController {
  @operation({
    summary: "Get Aly",
  })
  @get()
  static getAly = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aly",
  })
  @post("{id}")
  static createAly = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
