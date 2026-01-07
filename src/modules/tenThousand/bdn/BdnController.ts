import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdn")
export default class BdnController {
  @operation({
    summary: "Get Bdn",
  })
  @get()
  static getBdn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdn",
  })
  @post("{id}")
  static createBdn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
