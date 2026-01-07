import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmy")
export default class LmyController {
  @operation({
    summary: "Get Lmy",
  })
  @get()
  static getLmy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmy",
  })
  @post("{id}")
  static createLmy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
