import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvl")
export default class HvlController {
  @operation({
    summary: "Get Hvl",
  })
  @get()
  static getHvl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvl",
  })
  @post("{id}")
  static createHvl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
