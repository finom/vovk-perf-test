import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dpe")
export default class DpeController {
  @operation({
    summary: "Get Dpe",
  })
  @get()
  static getDpe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dpe",
  })
  @post("{id}")
  static createDpe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
