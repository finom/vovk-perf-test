import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epc")
export default class EpcController {
  @operation({
    summary: "Get Epc",
  })
  @get()
  static getEpc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epc",
  })
  @post("{id}")
  static createEpc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
