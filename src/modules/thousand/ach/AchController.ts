import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ach")
export default class AchController {
  @operation({
    summary: "Get Ach",
  })
  @get()
  static getAch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ach",
  })
  @post("{id}")
  static createAch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
