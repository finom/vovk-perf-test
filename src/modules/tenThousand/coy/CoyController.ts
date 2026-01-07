import { procedure, prefix, get, post, operation } from "vovk";

@prefix("coy")
export default class CoyController {
  @operation({
    summary: "Get Coy",
  })
  @get()
  static getCoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Coy",
  })
  @post("{id}")
  static createCoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
