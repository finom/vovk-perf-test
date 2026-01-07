import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dui")
export default class DuiController {
  @operation({
    summary: "Get Dui",
  })
  @get()
  static getDui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dui",
  })
  @post("{id}")
  static createDui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
