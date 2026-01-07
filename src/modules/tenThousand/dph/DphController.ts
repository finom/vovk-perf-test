import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dph")
export default class DphController {
  @operation({
    summary: "Get Dph",
  })
  @get()
  static getDph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dph",
  })
  @post("{id}")
  static createDph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
