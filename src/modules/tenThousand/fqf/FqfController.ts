import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqf")
export default class FqfController {
  @operation({
    summary: "Get Fqf",
  })
  @get()
  static getFqf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqf",
  })
  @post("{id}")
  static createFqf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
