import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyr")
export default class EyrController {
  @operation({
    summary: "Get Eyr",
  })
  @get()
  static getEyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyr",
  })
  @post("{id}")
  static createEyr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
