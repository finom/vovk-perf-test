import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsr")
export default class BsrController {
  @operation({
    summary: "Get Bsr",
  })
  @get()
  static getBsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bsr",
  })
  @post("{id}")
  static createBsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
