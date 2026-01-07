import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byr")
export default class ByrController {
  @operation({
    summary: "Get Byr",
  })
  @get()
  static getByr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byr",
  })
  @post("{id}")
  static createByr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
