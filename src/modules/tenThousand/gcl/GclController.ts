import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gcl")
export default class GclController {
  @operation({
    summary: "Get Gcl",
  })
  @get()
  static getGcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gcl",
  })
  @post("{id}")
  static createGcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
