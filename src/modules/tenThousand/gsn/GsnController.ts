import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsn")
export default class GsnController {
  @operation({
    summary: "Get Gsn",
  })
  @get()
  static getGsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gsn",
  })
  @post("{id}")
  static createGsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
