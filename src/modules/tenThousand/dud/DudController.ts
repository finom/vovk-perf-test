import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dud")
export default class DudController {
  @operation({
    summary: "Get Dud",
  })
  @get()
  static getDud = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dud",
  })
  @post("{id}")
  static createDud = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
