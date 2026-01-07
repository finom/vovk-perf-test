import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bol")
export default class BolController {
  @operation({
    summary: "Get Bol",
  })
  @get()
  static getBol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bol",
  })
  @post("{id}")
  static createBol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
