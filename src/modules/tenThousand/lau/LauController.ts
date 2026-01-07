import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lau")
export default class LauController {
  @operation({
    summary: "Get Lau",
  })
  @get()
  static getLau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lau",
  })
  @post("{id}")
  static createLau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
