import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyr")
export default class IyrController {
  @operation({
    summary: "Get Iyr",
  })
  @get()
  static getIyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyr",
  })
  @post("{id}")
  static createIyr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
