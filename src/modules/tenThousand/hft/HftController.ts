import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hft")
export default class HftController {
  @operation({
    summary: "Get Hft",
  })
  @get()
  static getHft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hft",
  })
  @post("{id}")
  static createHft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
