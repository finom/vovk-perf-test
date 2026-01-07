import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fa")
export default class FaController {
  @operation({
    summary: "Get Fa",
  })
  @get()
  static getFa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fa",
  })
  @post("{id}")
  static createFa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
