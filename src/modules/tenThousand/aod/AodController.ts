import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aod")
export default class AodController {
  @operation({
    summary: "Get Aod",
  })
  @get()
  static getAod = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aod",
  })
  @post("{id}")
  static createAod = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
