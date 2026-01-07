import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cwf")
export default class CwfController {
  @operation({
    summary: "Get Cwf",
  })
  @get()
  static getCwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cwf",
  })
  @post("{id}")
  static createCwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
