import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aem")
export default class AemController {
  @operation({
    summary: "Get Aem",
  })
  @get()
  static getAem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aem",
  })
  @post("{id}")
  static createAem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
