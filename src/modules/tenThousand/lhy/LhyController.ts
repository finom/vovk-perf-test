import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhy")
export default class LhyController {
  @operation({
    summary: "Get Lhy",
  })
  @get()
  static getLhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhy",
  })
  @post("{id}")
  static createLhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
