import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsg")
export default class FsgController {
  @operation({
    summary: "Get Fsg",
  })
  @get()
  static getFsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsg",
  })
  @post("{id}")
  static createFsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
