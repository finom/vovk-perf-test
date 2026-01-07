import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjw")
export default class HjwController {
  @operation({
    summary: "Get Hjw",
  })
  @get()
  static getHjw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjw",
  })
  @post("{id}")
  static createHjw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
