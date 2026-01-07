import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fx")
export default class FxController {
  @operation({
    summary: "Get Fx",
  })
  @get()
  static getFx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fx",
  })
  @post("{id}")
  static createFx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
