import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bde")
export default class BdeController {
  @operation({
    summary: "Get Bde",
  })
  @get()
  static getBde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bde",
  })
  @post("{id}")
  static createBde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
