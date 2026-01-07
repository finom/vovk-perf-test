import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nw")
export default class NwController {
  @operation({
    summary: "Get Nw",
  })
  @get()
  static getNw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nw",
  })
  @post("{id}")
  static createNw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
