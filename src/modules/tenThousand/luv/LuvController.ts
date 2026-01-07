import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luv")
export default class LuvController {
  @operation({
    summary: "Get Luv",
  })
  @get()
  static getLuv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Luv",
  })
  @post("{id}")
  static createLuv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
