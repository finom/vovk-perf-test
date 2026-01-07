import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjp")
export default class HjpController {
  @operation({
    summary: "Get Hjp",
  })
  @get()
  static getHjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjp",
  })
  @post("{id}")
  static createHjp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
