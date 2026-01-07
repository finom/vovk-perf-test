import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acd")
export default class AcdController {
  @operation({
    summary: "Get Acd",
  })
  @get()
  static getAcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acd",
  })
  @post("{id}")
  static createAcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
