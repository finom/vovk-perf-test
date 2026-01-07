import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eja")
export default class EjaController {
  @operation({
    summary: "Get Eja",
  })
  @get()
  static getEja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eja",
  })
  @post("{id}")
  static createEja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
