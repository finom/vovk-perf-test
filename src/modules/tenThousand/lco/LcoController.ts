import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lco")
export default class LcoController {
  @operation({
    summary: "Get Lco",
  })
  @get()
  static getLco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lco",
  })
  @post("{id}")
  static createLco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
