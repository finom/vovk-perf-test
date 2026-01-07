import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqd")
export default class FqdController {
  @operation({
    summary: "Get Fqd",
  })
  @get()
  static getFqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqd",
  })
  @post("{id}")
  static createFqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
