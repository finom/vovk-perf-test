import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adp")
export default class AdpController {
  @operation({
    summary: "Get Adp",
  })
  @get()
  static getAdp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adp",
  })
  @post("{id}")
  static createAdp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
