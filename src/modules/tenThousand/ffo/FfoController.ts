import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffo")
export default class FfoController {
  @operation({
    summary: "Get Ffo",
  })
  @get()
  static getFfo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffo",
  })
  @post("{id}")
  static createFfo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
