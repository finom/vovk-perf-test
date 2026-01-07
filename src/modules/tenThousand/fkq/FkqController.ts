import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkq")
export default class FkqController {
  @operation({
    summary: "Get Fkq",
  })
  @get()
  static getFkq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkq",
  })
  @post("{id}")
  static createFkq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
