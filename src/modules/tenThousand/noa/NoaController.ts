import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noa")
export default class NoaController {
  @operation({
    summary: "Get Noa",
  })
  @get()
  static getNoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noa",
  })
  @post("{id}")
  static createNoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
