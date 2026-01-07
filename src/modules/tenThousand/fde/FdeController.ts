import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fde")
export default class FdeController {
  @operation({
    summary: "Get Fde",
  })
  @get()
  static getFde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fde",
  })
  @post("{id}")
  static createFde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
