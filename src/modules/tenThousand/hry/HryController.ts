import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hry")
export default class HryController {
  @operation({
    summary: "Get Hry",
  })
  @get()
  static getHry = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hry",
  })
  @post("{id}")
  static createHry = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
