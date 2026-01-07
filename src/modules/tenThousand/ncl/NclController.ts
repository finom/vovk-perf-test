import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncl")
export default class NclController {
  @operation({
    summary: "Get Ncl",
  })
  @get()
  static getNcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ncl",
  })
  @post("{id}")
  static createNcl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
