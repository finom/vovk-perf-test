import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlz")
export default class MlzController {
  @operation({
    summary: "Get Mlz",
  })
  @get()
  static getMlz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mlz",
  })
  @post("{id}")
  static createMlz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
