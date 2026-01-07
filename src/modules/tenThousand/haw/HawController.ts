import { procedure, prefix, get, post, operation } from "vovk";

@prefix("haw")
export default class HawController {
  @operation({
    summary: "Get Haw",
  })
  @get()
  static getHaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Haw",
  })
  @post("{id}")
  static createHaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
