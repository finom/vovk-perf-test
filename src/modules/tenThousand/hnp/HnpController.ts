import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnp")
export default class HnpController {
  @operation({
    summary: "Get Hnp",
  })
  @get()
  static getHnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnp",
  })
  @post("{id}")
  static createHnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
