import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhs")
export default class FhsController {
  @operation({
    summary: "Get Fhs",
  })
  @get()
  static getFhs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhs",
  })
  @post("{id}")
  static createFhs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
