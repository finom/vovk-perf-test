import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frz")
export default class FrzController {
  @operation({
    summary: "Get Frz",
  })
  @get()
  static getFrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frz",
  })
  @post("{id}")
  static createFrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
