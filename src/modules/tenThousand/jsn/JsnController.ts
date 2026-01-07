import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsn")
export default class JsnController {
  @operation({
    summary: "Get Jsn",
  })
  @get()
  static getJsn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsn",
  })
  @post("{id}")
  static createJsn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
