import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egf")
export default class EgfController {
  @operation({
    summary: "Get Egf",
  })
  @get()
  static getEgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egf",
  })
  @post("{id}")
  static createEgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
