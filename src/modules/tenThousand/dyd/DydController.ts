import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyd")
export default class DydController {
  @operation({
    summary: "Get Dyd",
  })
  @get()
  static getDyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dyd",
  })
  @post("{id}")
  static createDyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
