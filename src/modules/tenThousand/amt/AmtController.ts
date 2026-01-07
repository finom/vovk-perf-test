import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amt")
export default class AmtController {
  @operation({
    summary: "Get Amt",
  })
  @get()
  static getAmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amt",
  })
  @post("{id}")
  static createAmt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
