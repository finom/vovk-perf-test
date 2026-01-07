import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ffj")
export default class FfjController {
  @operation({
    summary: "Get Ffj",
  })
  @get()
  static getFfj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ffj",
  })
  @post("{id}")
  static createFfj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
