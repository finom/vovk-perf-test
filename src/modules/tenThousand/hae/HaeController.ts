import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hae")
export default class HaeController {
  @operation({
    summary: "Get Hae",
  })
  @get()
  static getHae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hae",
  })
  @post("{id}")
  static createHae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
