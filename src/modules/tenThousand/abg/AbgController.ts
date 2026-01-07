import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abg")
export default class AbgController {
  @operation({
    summary: "Get Abg",
  })
  @get()
  static getAbg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Abg",
  })
  @post("{id}")
  static createAbg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
