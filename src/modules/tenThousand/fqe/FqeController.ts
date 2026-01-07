import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqe")
export default class FqeController {
  @operation({
    summary: "Get Fqe",
  })
  @get()
  static getFqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fqe",
  })
  @post("{id}")
  static createFqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
