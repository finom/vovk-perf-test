import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfw")
export default class HfwController {
  @operation({
    summary: "Get Hfw",
  })
  @get()
  static getHfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hfw",
  })
  @post("{id}")
  static createHfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
