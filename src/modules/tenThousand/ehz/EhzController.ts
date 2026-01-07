import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehz")
export default class EhzController {
  @operation({
    summary: "Get Ehz",
  })
  @get()
  static getEhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehz",
  })
  @post("{id}")
  static createEhz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
