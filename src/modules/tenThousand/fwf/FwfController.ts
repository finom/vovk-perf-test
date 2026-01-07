import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwf")
export default class FwfController {
  @operation({
    summary: "Get Fwf",
  })
  @get()
  static getFwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwf",
  })
  @post("{id}")
  static createFwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
