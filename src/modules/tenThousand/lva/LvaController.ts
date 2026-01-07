import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lva")
export default class LvaController {
  @operation({
    summary: "Get Lva",
  })
  @get()
  static getLva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lva",
  })
  @post("{id}")
  static createLva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
