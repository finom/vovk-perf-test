import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwf")
export default class BwfController {
  @operation({
    summary: "Get Bwf",
  })
  @get()
  static getBwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bwf",
  })
  @post("{id}")
  static createBwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
