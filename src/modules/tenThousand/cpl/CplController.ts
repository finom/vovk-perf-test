import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpl")
export default class CplController {
  @operation({
    summary: "Get Cpl",
  })
  @get()
  static getCpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpl",
  })
  @post("{id}")
  static createCpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
