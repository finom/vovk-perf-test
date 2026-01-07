import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fae")
export default class FaeController {
  @operation({
    summary: "Get Fae",
  })
  @get()
  static getFae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fae",
  })
  @post("{id}")
  static createFae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
