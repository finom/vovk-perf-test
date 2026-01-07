import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ca")
export default class CaController {
  @operation({
    summary: "Get Ca",
  })
  @get()
  static getCa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ca",
  })
  @post("{id}")
  static createCa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
