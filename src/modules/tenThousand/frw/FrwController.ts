import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frw")
export default class FrwController {
  @operation({
    summary: "Get Frw",
  })
  @get()
  static getFrw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frw",
  })
  @post("{id}")
  static createFrw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
