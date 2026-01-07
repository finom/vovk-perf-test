import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgt")
export default class HgtController {
  @operation({
    summary: "Get Hgt",
  })
  @get()
  static getHgt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hgt",
  })
  @post("{id}")
  static createHgt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
