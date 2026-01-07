import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lad")
export default class LadController {
  @operation({
    summary: "Get Lad",
  })
  @get()
  static getLad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lad",
  })
  @post("{id}")
  static createLad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
