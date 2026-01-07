import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpl")
export default class MplController {
  @operation({
    summary: "Get Mpl",
  })
  @get()
  static getMpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mpl",
  })
  @post("{id}")
  static createMpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
