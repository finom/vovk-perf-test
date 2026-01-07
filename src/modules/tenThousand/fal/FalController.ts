import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fal")
export default class FalController {
  @operation({
    summary: "Get Fal",
  })
  @get()
  static getFal = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fal",
  })
  @post("{id}")
  static createFal = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
