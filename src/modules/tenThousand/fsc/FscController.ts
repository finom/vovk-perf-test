import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsc")
export default class FscController {
  @operation({
    summary: "Get Fsc",
  })
  @get()
  static getFsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsc",
  })
  @post("{id}")
  static createFsc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
