import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atz")
export default class AtzController {
  @operation({
    summary: "Get Atz",
  })
  @get()
  static getAtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atz",
  })
  @post("{id}")
  static createAtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
