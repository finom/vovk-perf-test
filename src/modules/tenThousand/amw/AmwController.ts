import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amw")
export default class AmwController {
  @operation({
    summary: "Get Amw",
  })
  @get()
  static getAmw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amw",
  })
  @post("{id}")
  static createAmw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
