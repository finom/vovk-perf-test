import { procedure, prefix, get, post, operation } from "vovk";

@prefix("boa")
export default class BoaController {
  @operation({
    summary: "Get Boa",
  })
  @get()
  static getBoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Boa",
  })
  @post("{id}")
  static createBoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
