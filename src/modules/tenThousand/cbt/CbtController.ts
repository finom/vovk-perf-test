import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cbt")
export default class CbtController {
  @operation({
    summary: "Get Cbt",
  })
  @get()
  static getCbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbt",
  })
  @post("{id}")
  static createCbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
