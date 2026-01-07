import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kug")
export default class KugController {
  @operation({
    summary: "Get Kug",
  })
  @get()
  static getKug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kug",
  })
  @post("{id}")
  static createKug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
