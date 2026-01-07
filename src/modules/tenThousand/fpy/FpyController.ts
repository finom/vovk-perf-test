import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpy")
export default class FpyController {
  @operation({
    summary: "Get Fpy",
  })
  @get()
  static getFpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpy",
  })
  @post("{id}")
  static createFpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
