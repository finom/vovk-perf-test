import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fob")
export default class FobController {
  @operation({
    summary: "Get Fob",
  })
  @get()
  static getFob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fob",
  })
  @post("{id}")
  static createFob = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
