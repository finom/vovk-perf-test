import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blm")
export default class BlmController {
  @operation({
    summary: "Get Blm",
  })
  @get()
  static getBlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blm",
  })
  @post("{id}")
  static createBlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
