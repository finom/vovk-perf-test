import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knd")
export default class KndController {
  @operation({
    summary: "Get Knd",
  })
  @get()
  static getKnd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knd",
  })
  @post("{id}")
  static createKnd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
