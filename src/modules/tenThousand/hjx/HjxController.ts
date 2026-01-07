import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjx")
export default class HjxController {
  @operation({
    summary: "Get Hjx",
  })
  @get()
  static getHjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjx",
  })
  @post("{id}")
  static createHjx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
