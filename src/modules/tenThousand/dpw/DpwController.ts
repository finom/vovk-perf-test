import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpw")
export default class DpwController {
  @operation({
    summary: "Get Dpw",
  })
  @get()
  static getDpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpw",
  })
  @post("{id}")
  static createDpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
