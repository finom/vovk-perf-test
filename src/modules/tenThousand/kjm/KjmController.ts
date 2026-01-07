import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjm")
export default class KjmController {
  @operation({
    summary: "Get Kjm",
  })
  @get()
  static getKjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjm",
  })
  @post("{id}")
  static createKjm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
