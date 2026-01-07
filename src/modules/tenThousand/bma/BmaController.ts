import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bma")
export default class BmaController {
  @operation({
    summary: "Get Bma",
  })
  @get()
  static getBma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bma",
  })
  @post("{id}")
  static createBma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
