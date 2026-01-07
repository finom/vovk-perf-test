import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyd")
export default class LydController {
  @operation({
    summary: "Get Lyd",
  })
  @get()
  static getLyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lyd",
  })
  @post("{id}")
  static createLyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
