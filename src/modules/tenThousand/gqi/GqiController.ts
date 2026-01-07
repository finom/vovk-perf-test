import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqi")
export default class GqiController {
  @operation({
    summary: "Get Gqi",
  })
  @get()
  static getGqi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqi",
  })
  @post("{id}")
  static createGqi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
