import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqq")
export default class FqqController {
  @operation({
    summary: "Get Fqq",
  })
  @get()
  static getFqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqq",
  })
  @post("{id}")
  static createFqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
