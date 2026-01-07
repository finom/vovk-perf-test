import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsb")
export default class LsbController {
  @operation({
    summary: "Get Lsb",
  })
  @get()
  static getLsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsb",
  })
  @post("{id}")
  static createLsb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
