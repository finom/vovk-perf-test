import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkd")
export default class FkdController {
  @operation({
    summary: "Get Fkd",
  })
  @get()
  static getFkd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkd",
  })
  @post("{id}")
  static createFkd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
