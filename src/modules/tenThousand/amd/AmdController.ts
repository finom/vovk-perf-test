import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amd")
export default class AmdController {
  @operation({
    summary: "Get Amd",
  })
  @get()
  static getAmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amd",
  })
  @post("{id}")
  static createAmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
