import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bik")
export default class BikController {
  @operation({
    summary: "Get Bik",
  })
  @get()
  static getBik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bik",
  })
  @post("{id}")
  static createBik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
