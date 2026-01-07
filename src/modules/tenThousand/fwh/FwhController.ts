import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwh")
export default class FwhController {
  @operation({
    summary: "Get Fwh",
  })
  @get()
  static getFwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwh",
  })
  @post("{id}")
  static createFwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
