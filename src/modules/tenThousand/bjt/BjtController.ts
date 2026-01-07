import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjt")
export default class BjtController {
  @operation({
    summary: "Get Bjt",
  })
  @get()
  static getBjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bjt",
  })
  @post("{id}")
  static createBjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
