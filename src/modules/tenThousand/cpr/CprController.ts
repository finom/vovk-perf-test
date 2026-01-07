import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpr")
export default class CprController {
  @operation({
    summary: "Get Cpr",
  })
  @get()
  static getCpr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpr",
  })
  @post("{id}")
  static createCpr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
