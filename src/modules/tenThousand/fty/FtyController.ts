import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fty")
export default class FtyController {
  @operation({
    summary: "Get Fty",
  })
  @get()
  static getFty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fty",
  })
  @post("{id}")
  static createFty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
