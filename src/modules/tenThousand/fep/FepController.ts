import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fep")
export default class FepController {
  @operation({
    summary: "Get Fep",
  })
  @get()
  static getFep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fep",
  })
  @post("{id}")
  static createFep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
