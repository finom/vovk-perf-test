import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhr")
export default class FhrController {
  @operation({
    summary: "Get Fhr",
  })
  @get()
  static getFhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhr",
  })
  @post("{id}")
  static createFhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
