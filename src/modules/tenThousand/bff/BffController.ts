import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bff")
export default class BffController {
  @operation({
    summary: "Get Bff",
  })
  @get()
  static getBff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bff",
  })
  @post("{id}")
  static createBff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
