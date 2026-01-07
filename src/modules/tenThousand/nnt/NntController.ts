import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnt")
export default class NntController {
  @operation({
    summary: "Get Nnt",
  })
  @get()
  static getNnt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnt",
  })
  @post("{id}")
  static createNnt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
