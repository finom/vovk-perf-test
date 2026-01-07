import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dea")
export default class DeaController {
  @operation({
    summary: "Get Dea",
  })
  @get()
  static getDea = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dea",
  })
  @post("{id}")
  static createDea = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
