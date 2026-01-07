import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aiy")
export default class AiyController {
  @operation({
    summary: "Get Aiy",
  })
  @get()
  static getAiy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aiy",
  })
  @post("{id}")
  static createAiy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
