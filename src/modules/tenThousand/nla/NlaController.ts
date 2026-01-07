import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nla")
export default class NlaController {
  @operation({
    summary: "Get Nla",
  })
  @get()
  static getNla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nla",
  })
  @post("{id}")
  static createNla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
