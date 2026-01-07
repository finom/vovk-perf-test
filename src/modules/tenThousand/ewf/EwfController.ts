import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewf")
export default class EwfController {
  @operation({
    summary: "Get Ewf",
  })
  @get()
  static getEwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewf",
  })
  @post("{id}")
  static createEwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
