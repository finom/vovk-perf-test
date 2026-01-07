import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hel")
export default class HelController {
  @operation({
    summary: "Get Hel",
  })
  @get()
  static getHel = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hel",
  })
  @post("{id}")
  static createHel = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
