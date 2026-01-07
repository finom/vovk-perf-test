import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adq")
export default class AdqController {
  @operation({
    summary: "Get Adq",
  })
  @get()
  static getAdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adq",
  })
  @post("{id}")
  static createAdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
