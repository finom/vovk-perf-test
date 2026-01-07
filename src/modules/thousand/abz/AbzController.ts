import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abz")
export default class AbzController {
  @operation({
    summary: "Get Abz",
  })
  @get()
  static getAbz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abz",
  })
  @post("{id}")
  static createAbz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
