import { procedure, prefix, get, post, operation } from "vovk";

@prefix("flo")
export default class FloController {
  @operation({
    summary: "Get Flo",
  })
  @get()
  static getFlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flo",
  })
  @post("{id}")
  static createFlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
