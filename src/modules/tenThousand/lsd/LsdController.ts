import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsd")
export default class LsdController {
  @operation({
    summary: "Get Lsd",
  })
  @get()
  static getLsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsd",
  })
  @post("{id}")
  static createLsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
