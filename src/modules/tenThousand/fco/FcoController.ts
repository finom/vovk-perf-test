import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fco")
export default class FcoController {
  @operation({
    summary: "Get Fco",
  })
  @get()
  static getFco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fco",
  })
  @post("{id}")
  static createFco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
