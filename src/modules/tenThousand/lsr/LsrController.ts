import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsr")
export default class LsrController {
  @operation({
    summary: "Get Lsr",
  })
  @get()
  static getLsr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsr",
  })
  @post("{id}")
  static createLsr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
