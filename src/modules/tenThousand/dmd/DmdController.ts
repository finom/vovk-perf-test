import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmd")
export default class DmdController {
  @operation({
    summary: "Get Dmd",
  })
  @get()
  static getDmd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmd",
  })
  @post("{id}")
  static createDmd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
