import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuu")
export default class CuuController {
  @operation({
    summary: "Get Cuu",
  })
  @get()
  static getCuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cuu",
  })
  @post("{id}")
  static createCuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
