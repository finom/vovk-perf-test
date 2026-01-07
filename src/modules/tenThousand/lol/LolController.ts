import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lol")
export default class LolController {
  @operation({
    summary: "Get Lol",
  })
  @get()
  static getLol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lol",
  })
  @post("{id}")
  static createLol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
