import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mui")
export default class MuiController {
  @operation({
    summary: "Get Mui",
  })
  @get()
  static getMui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mui",
  })
  @post("{id}")
  static createMui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
