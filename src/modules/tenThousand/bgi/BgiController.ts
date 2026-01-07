import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgi")
export default class BgiController {
  @operation({
    summary: "Get Bgi",
  })
  @get()
  static getBgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgi",
  })
  @post("{id}")
  static createBgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
