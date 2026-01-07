import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aix")
export default class AixController {
  @operation({
    summary: "Get Aix",
  })
  @get()
  static getAix = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aix",
  })
  @post("{id}")
  static createAix = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
