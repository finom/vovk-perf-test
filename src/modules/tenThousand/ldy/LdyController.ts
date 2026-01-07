import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldy")
export default class LdyController {
  @operation({
    summary: "Get Ldy",
  })
  @get()
  static getLdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ldy",
  })
  @post("{id}")
  static createLdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
