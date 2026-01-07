import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lit")
export default class LitController {
  @operation({
    summary: "Get Lit",
  })
  @get()
  static getLit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lit",
  })
  @post("{id}")
  static createLit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
