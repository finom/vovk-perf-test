import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dc")
export default class DcController {
  @operation({
    summary: "Get Dc",
  })
  @get()
  static getDc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dc",
  })
  @post("{id}")
  static createDc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
