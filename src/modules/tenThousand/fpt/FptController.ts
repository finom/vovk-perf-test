import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fpt")
export default class FptController {
  @operation({
    summary: "Get Fpt",
  })
  @get()
  static getFpt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fpt",
  })
  @post("{id}")
  static createFpt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
