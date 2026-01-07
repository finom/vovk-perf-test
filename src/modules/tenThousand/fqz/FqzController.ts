import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqz")
export default class FqzController {
  @operation({
    summary: "Get Fqz",
  })
  @get()
  static getFqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqz",
  })
  @post("{id}")
  static createFqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
