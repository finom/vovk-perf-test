import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dqi")
export default class DqiController {
  @operation({
    summary: "Get Dqi",
  })
  @get()
  static getDqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dqi",
  })
  @post("{id}")
  static createDqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
