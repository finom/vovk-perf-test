import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lel")
export default class LelController {
  @operation({
    summary: "Get Lel",
  })
  @get()
  static getLel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lel",
  })
  @post("{id}")
  static createLel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
