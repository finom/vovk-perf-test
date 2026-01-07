import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjf")
export default class HjfController {
  @operation({
    summary: "Get Hjf",
  })
  @get()
  static getHjf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjf",
  })
  @post("{id}")
  static createHjf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
