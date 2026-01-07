import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fva")
export default class FvaController {
  @operation({
    summary: "Get Fva",
  })
  @get()
  static getFva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fva",
  })
  @post("{id}")
  static createFva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
