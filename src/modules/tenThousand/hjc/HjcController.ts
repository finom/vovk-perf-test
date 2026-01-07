import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjc")
export default class HjcController {
  @operation({
    summary: "Get Hjc",
  })
  @get()
  static getHjc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjc",
  })
  @post("{id}")
  static createHjc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
