import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipi")
export default class IpiController {
  @operation({
    summary: "Get Ipi",
  })
  @get()
  static getIpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipi",
  })
  @post("{id}")
  static createIpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
