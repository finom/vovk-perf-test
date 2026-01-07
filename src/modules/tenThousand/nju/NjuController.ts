import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nju")
export default class NjuController {
  @operation({
    summary: "Get Nju",
  })
  @get()
  static getNju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nju",
  })
  @post("{id}")
  static createNju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
