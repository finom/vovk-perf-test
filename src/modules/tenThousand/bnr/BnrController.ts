import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnr")
export default class BnrController {
  @operation({
    summary: "Get Bnr",
  })
  @get()
  static getBnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnr",
  })
  @post("{id}")
  static createBnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
