import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcu")
export default class FcuController {
  @operation({
    summary: "Get Fcu",
  })
  @get()
  static getFcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcu",
  })
  @post("{id}")
  static createFcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
