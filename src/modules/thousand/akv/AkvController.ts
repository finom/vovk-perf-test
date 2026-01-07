import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akv")
export default class AkvController {
  @operation({
    summary: "Get Akv",
  })
  @get()
  static getAkv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akv",
  })
  @post("{id}")
  static createAkv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
