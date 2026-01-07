import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mde")
export default class MdeController {
  @operation({
    summary: "Get Mde",
  })
  @get()
  static getMde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mde",
  })
  @post("{id}")
  static createMde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
