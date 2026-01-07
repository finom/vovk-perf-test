import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkj")
export default class FkjController {
  @operation({
    summary: "Get Fkj",
  })
  @get()
  static getFkj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkj",
  })
  @post("{id}")
  static createFkj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
