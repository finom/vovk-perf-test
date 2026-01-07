import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyr")
export default class KyrController {
  @operation({
    summary: "Get Kyr",
  })
  @get()
  static getKyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyr",
  })
  @post("{id}")
  static createKyr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
