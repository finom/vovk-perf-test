import { procedure, prefix, get, post, operation } from "vovk";

@prefix("auj")
export default class AujController {
  @operation({
    summary: "Get Auj",
  })
  @get()
  static getAuj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Auj",
  })
  @post("{id}")
  static createAuj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
