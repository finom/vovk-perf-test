import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meq")
export default class MeqController {
  @operation({
    summary: "Get Meq",
  })
  @get()
  static getMeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Meq",
  })
  @post("{id}")
  static createMeq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
