import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfd")
export default class LfdController {
  @operation({
    summary: "Get Lfd",
  })
  @get()
  static getLfd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lfd",
  })
  @post("{id}")
  static createLfd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
