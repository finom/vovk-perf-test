import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fth")
export default class FthController {
  @operation({
    summary: "Get Fth",
  })
  @get()
  static getFth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fth",
  })
  @post("{id}")
  static createFth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
