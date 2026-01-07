import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmz")
export default class LmzController {
  @operation({
    summary: "Get Lmz",
  })
  @get()
  static getLmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmz",
  })
  @post("{id}")
  static createLmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
