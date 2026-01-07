import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gpp")
export default class GppController {
  @operation({
    summary: "Get Gpp",
  })
  @get()
  static getGpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gpp",
  })
  @post("{id}")
  static createGpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
