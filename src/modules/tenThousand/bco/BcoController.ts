import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bco")
export default class BcoController {
  @operation({
    summary: "Get Bco",
  })
  @get()
  static getBco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bco",
  })
  @post("{id}")
  static createBco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
