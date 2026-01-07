import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csu")
export default class CsuController {
  @operation({
    summary: "Get Csu",
  })
  @get()
  static getCsu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Csu",
  })
  @post("{id}")
  static createCsu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
