import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcl")
export default class HclController {
  @operation({
    summary: "Get Hcl",
  })
  @get()
  static getHcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcl",
  })
  @post("{id}")
  static createHcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
