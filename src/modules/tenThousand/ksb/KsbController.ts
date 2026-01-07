import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksb")
export default class KsbController {
  @operation({
    summary: "Get Ksb",
  })
  @get()
  static getKsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksb",
  })
  @post("{id}")
  static createKsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
