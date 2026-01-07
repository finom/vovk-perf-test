import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjq")
export default class HjqController {
  @operation({
    summary: "Get Hjq",
  })
  @get()
  static getHjq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjq",
  })
  @post("{id}")
  static createHjq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
