import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddb")
export default class DdbController {
  @operation({
    summary: "Get Ddb",
  })
  @get()
  static getDdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddb",
  })
  @post("{id}")
  static createDdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
