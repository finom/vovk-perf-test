import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsy")
export default class LsyController {
  @operation({
    summary: "Get Lsy",
  })
  @get()
  static getLsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsy",
  })
  @post("{id}")
  static createLsy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
