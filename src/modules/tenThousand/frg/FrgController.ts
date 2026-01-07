import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frg")
export default class FrgController {
  @operation({
    summary: "Get Frg",
  })
  @get()
  static getFrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frg",
  })
  @post("{id}")
  static createFrg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
