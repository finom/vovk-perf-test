import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyr")
export default class JyrController {
  @operation({
    summary: "Get Jyr",
  })
  @get()
  static getJyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyr",
  })
  @post("{id}")
  static createJyr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
