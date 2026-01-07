import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guf")
export default class GufController {
  @operation({
    summary: "Get Guf",
  })
  @get()
  static getGuf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guf",
  })
  @post("{id}")
  static createGuf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
