import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffw")
export default class FfwController {
  @operation({
    summary: "Get Ffw",
  })
  @get()
  static getFfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffw",
  })
  @post("{id}")
  static createFfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
