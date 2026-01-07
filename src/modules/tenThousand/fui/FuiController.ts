import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fui")
export default class FuiController {
  @operation({
    summary: "Get Fui",
  })
  @get()
  static getFui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fui",
  })
  @post("{id}")
  static createFui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
