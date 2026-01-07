import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aor")
export default class AorController {
  @operation({
    summary: "Get Aor",
  })
  @get()
  static getAor = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aor",
  })
  @post("{id}")
  static createAor = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
