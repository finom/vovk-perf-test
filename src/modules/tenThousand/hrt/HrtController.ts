import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrt")
export default class HrtController {
  @operation({
    summary: "Get Hrt",
  })
  @get()
  static getHrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrt",
  })
  @post("{id}")
  static createHrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
