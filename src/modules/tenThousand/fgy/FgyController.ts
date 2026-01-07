import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgy")
export default class FgyController {
  @operation({
    summary: "Get Fgy",
  })
  @get()
  static getFgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgy",
  })
  @post("{id}")
  static createFgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
