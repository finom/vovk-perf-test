import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lds")
export default class LdsController {
  @operation({
    summary: "Get Lds",
  })
  @get()
  static getLds = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lds",
  })
  @post("{id}")
  static createLds = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
