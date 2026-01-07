import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjd")
export default class HjdController {
  @operation({
    summary: "Get Hjd",
  })
  @get()
  static getHjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjd",
  })
  @post("{id}")
  static createHjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
