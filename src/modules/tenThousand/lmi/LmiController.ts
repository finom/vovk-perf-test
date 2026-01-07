import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmi")
export default class LmiController {
  @operation({
    summary: "Get Lmi",
  })
  @get()
  static getLmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmi",
  })
  @post("{id}")
  static createLmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
