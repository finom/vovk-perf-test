import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fz")
export default class FzController {
  @operation({
    summary: "Get Fz",
  })
  @get()
  static getFz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fz",
  })
  @post("{id}")
  static createFz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
