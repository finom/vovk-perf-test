import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftz")
export default class FtzController {
  @operation({
    summary: "Get Ftz",
  })
  @get()
  static getFtz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftz",
  })
  @post("{id}")
  static createFtz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
