import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fj")
export default class FjController {
  @operation({
    summary: "Get Fj",
  })
  @get()
  static getFj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fj",
  })
  @post("{id}")
  static createFj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
