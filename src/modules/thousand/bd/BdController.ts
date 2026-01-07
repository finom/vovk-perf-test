import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bd")
export default class BdController {
  @operation({
    summary: "Get Bd",
  })
  @get()
  static getBd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bd",
  })
  @post("{id}")
  static createBd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
