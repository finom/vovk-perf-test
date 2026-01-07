import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hjz")
export default class HjzController {
  @operation({
    summary: "Get Hjz",
  })
  @get()
  static getHjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hjz",
  })
  @post("{id}")
  static createHjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
