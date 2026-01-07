import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kaw")
export default class KawController {
  @operation({
    summary: "Get Kaw",
  })
  @get()
  static getKaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kaw",
  })
  @post("{id}")
  static createKaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
