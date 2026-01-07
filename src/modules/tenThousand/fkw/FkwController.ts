import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkw")
export default class FkwController {
  @operation({
    summary: "Get Fkw",
  })
  @get()
  static getFkw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkw",
  })
  @post("{id}")
  static createFkw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
