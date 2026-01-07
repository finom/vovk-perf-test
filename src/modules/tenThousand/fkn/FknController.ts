import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkn")
export default class FknController {
  @operation({
    summary: "Get Fkn",
  })
  @get()
  static getFkn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkn",
  })
  @post("{id}")
  static createFkn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
