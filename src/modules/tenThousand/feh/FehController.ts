import { procedure, prefix, get, post, operation } from "vovk";

@prefix("feh")
export default class FehController {
  @operation({
    summary: "Get Feh",
  })
  @get()
  static getFeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Feh",
  })
  @post("{id}")
  static createFeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
