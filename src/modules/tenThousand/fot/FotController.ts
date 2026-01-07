import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fot")
export default class FotController {
  @operation({
    summary: "Get Fot",
  })
  @get()
  static getFot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fot",
  })
  @post("{id}")
  static createFot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
