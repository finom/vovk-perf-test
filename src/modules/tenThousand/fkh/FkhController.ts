import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkh")
export default class FkhController {
  @operation({
    summary: "Get Fkh",
  })
  @get()
  static getFkh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkh",
  })
  @post("{id}")
  static createFkh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
