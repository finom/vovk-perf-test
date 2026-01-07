import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkr")
export default class FkrController {
  @operation({
    summary: "Get Fkr",
  })
  @get()
  static getFkr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkr",
  })
  @post("{id}")
  static createFkr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
