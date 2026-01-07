import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eon")
export default class EonController {
  @operation({
    summary: "Get Eon",
  })
  @get()
  static getEon = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eon",
  })
  @post("{id}")
  static createEon = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
