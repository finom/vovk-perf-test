import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ld")
export default class LdController {
  @operation({
    summary: "Get Ld",
  })
  @get()
  static getLd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ld",
  })
  @post("{id}")
  static createLd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
