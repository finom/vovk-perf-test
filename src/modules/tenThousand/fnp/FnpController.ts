import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnp")
export default class FnpController {
  @operation({
    summary: "Get Fnp",
  })
  @get()
  static getFnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnp",
  })
  @post("{id}")
  static createFnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
