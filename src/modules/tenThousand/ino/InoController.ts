import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ino")
export default class InoController {
  @operation({
    summary: "Get Ino",
  })
  @get()
  static getIno = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ino",
  })
  @post("{id}")
  static createIno = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
