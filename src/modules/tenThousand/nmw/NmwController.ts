import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nmw")
export default class NmwController {
  @operation({
    summary: "Get Nmw",
  })
  @get()
  static getNmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nmw",
  })
  @post("{id}")
  static createNmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
