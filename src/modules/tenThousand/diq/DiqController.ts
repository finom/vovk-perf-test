import { procedure, prefix, get, post, operation } from "vovk";

@prefix("diq")
export default class DiqController {
  @operation({
    summary: "Get Diq",
  })
  @get()
  static getDiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Diq",
  })
  @post("{id}")
  static createDiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
