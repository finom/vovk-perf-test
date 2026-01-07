import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfz")
export default class DfzController {
  @operation({
    summary: "Get Dfz",
  })
  @get()
  static getDfz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfz",
  })
  @post("{id}")
  static createDfz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
