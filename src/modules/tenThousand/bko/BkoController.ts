import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bko")
export default class BkoController {
  @operation({
    summary: "Get Bko",
  })
  @get()
  static getBko = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bko",
  })
  @post("{id}")
  static createBko = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
