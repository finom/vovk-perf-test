import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsc")
export default class NscController {
  @operation({
    summary: "Get Nsc",
  })
  @get()
  static getNsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsc",
  })
  @post("{id}")
  static createNsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
