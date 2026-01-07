import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwr")
export default class FwrController {
  @operation({
    summary: "Get Fwr",
  })
  @get()
  static getFwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwr",
  })
  @post("{id}")
  static createFwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
