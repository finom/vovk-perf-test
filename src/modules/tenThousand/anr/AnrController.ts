import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anr")
export default class AnrController {
  @operation({
    summary: "Get Anr",
  })
  @get()
  static getAnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anr",
  })
  @post("{id}")
  static createAnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
