import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bty")
export default class BtyController {
  @operation({
    summary: "Get Bty",
  })
  @get()
  static getBty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bty",
  })
  @post("{id}")
  static createBty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
