import { procedure, prefix, get, post, operation } from "vovk";

@prefix("law")
export default class LawController {
  @operation({
    summary: "Get Law",
  })
  @get()
  static getLaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Law",
  })
  @post("{id}")
  static createLaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
