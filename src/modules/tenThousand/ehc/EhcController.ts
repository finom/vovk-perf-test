import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehc")
export default class EhcController {
  @operation({
    summary: "Get Ehc",
  })
  @get()
  static getEhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehc",
  })
  @post("{id}")
  static createEhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
