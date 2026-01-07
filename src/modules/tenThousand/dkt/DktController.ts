import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dkt")
export default class DktController {
  @operation({
    summary: "Get Dkt",
  })
  @get()
  static getDkt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dkt",
  })
  @post("{id}")
  static createDkt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
