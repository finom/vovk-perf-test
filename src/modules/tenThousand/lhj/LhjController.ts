import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhj")
export default class LhjController {
  @operation({
    summary: "Get Lhj",
  })
  @get()
  static getLhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lhj",
  })
  @post("{id}")
  static createLhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
