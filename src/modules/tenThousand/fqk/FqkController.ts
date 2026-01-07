import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqk")
export default class FqkController {
  @operation({
    summary: "Get Fqk",
  })
  @get()
  static getFqk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqk",
  })
  @post("{id}")
  static createFqk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
