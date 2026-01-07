import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrs")
export default class MrsController {
  @operation({
    summary: "Get Mrs",
  })
  @get()
  static getMrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrs",
  })
  @post("{id}")
  static createMrs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
