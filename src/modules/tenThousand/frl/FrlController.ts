import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frl")
export default class FrlController {
  @operation({
    summary: "Get Frl",
  })
  @get()
  static getFrl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frl",
  })
  @post("{id}")
  static createFrl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
