import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxt")
export default class HxtController {
  @operation({
    summary: "Get Hxt",
  })
  @get()
  static getHxt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hxt",
  })
  @post("{id}")
  static createHxt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
