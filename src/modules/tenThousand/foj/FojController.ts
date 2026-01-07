import { procedure, prefix, get, post, operation } from "vovk";

@prefix("foj")
export default class FojController {
  @operation({
    summary: "Get Foj",
  })
  @get()
  static getFoj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Foj",
  })
  @post("{id}")
  static createFoj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
