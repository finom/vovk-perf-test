import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lph")
export default class LphController {
  @operation({
    summary: "Get Lph",
  })
  @get()
  static getLph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lph",
  })
  @post("{id}")
  static createLph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
