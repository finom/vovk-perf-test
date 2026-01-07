import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkf")
export default class FkfController {
  @operation({
    summary: "Get Fkf",
  })
  @get()
  static getFkf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkf",
  })
  @post("{id}")
  static createFkf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
