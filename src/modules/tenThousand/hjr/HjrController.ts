import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjr")
export default class HjrController {
  @operation({
    summary: "Get Hjr",
  })
  @get()
  static getHjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjr",
  })
  @post("{id}")
  static createHjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
