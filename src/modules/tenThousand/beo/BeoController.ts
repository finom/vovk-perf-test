import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beo")
export default class BeoController {
  @operation({
    summary: "Get Beo",
  })
  @get()
  static getBeo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Beo",
  })
  @post("{id}")
  static createBeo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
