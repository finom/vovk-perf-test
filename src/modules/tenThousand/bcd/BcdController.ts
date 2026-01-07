import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcd")
export default class BcdController {
  @operation({
    summary: "Get Bcd",
  })
  @get()
  static getBcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bcd",
  })
  @post("{id}")
  static createBcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
