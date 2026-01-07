import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cus")
export default class CusController {
  @operation({
    summary: "Get Cus",
  })
  @get()
  static getCus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cus",
  })
  @post("{id}")
  static createCus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
