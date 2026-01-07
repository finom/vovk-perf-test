import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abw")
export default class AbwController {
  @operation({
    summary: "Get Abw",
  })
  @get()
  static getAbw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abw",
  })
  @post("{id}")
  static createAbw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
