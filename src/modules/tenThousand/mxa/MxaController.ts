import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxa")
export default class MxaController {
  @operation({
    summary: "Get Mxa",
  })
  @get()
  static getMxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mxa",
  })
  @post("{id}")
  static createMxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
