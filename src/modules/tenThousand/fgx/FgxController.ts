import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgx")
export default class FgxController {
  @operation({
    summary: "Get Fgx",
  })
  @get()
  static getFgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgx",
  })
  @post("{id}")
  static createFgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
