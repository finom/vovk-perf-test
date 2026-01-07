import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brx")
export default class BrxController {
  @operation({
    summary: "Get Brx",
  })
  @get()
  static getBrx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brx",
  })
  @post("{id}")
  static createBrx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
