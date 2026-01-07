import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdr")
export default class GdrController {
  @operation({
    summary: "Get Gdr",
  })
  @get()
  static getGdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gdr",
  })
  @post("{id}")
  static createGdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
