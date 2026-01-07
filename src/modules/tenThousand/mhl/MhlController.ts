import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhl")
export default class MhlController {
  @operation({
    summary: "Get Mhl",
  })
  @get()
  static getMhl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mhl",
  })
  @post("{id}")
  static createMhl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
