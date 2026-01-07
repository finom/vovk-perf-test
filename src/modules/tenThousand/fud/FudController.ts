import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fud")
export default class FudController {
  @operation({
    summary: "Get Fud",
  })
  @get()
  static getFud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fud",
  })
  @post("{id}")
  static createFud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
