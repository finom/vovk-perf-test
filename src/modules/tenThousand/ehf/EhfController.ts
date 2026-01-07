import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehf")
export default class EhfController {
  @operation({
    summary: "Get Ehf",
  })
  @get()
  static getEhf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehf",
  })
  @post("{id}")
  static createEhf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
