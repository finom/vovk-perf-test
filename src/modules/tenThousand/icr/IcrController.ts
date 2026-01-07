import { procedure, prefix, get, post, operation } from "vovk";

@prefix("icr")
export default class IcrController {
  @operation({
    summary: "Get Icr",
  })
  @get()
  static getIcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Icr",
  })
  @post("{id}")
  static createIcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
