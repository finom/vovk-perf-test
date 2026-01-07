import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aps")
export default class ApsController {
  @operation({
    summary: "Get Aps",
  })
  @get()
  static getAps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aps",
  })
  @post("{id}")
  static createAps = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
