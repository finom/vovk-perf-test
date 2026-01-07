import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aku")
export default class AkuController {
  @operation({
    summary: "Get Aku",
  })
  @get()
  static getAku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aku",
  })
  @post("{id}")
  static createAku = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
