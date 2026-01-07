import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hee")
export default class HeeController {
  @operation({
    summary: "Get Hee",
  })
  @get()
  static getHee = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hee",
  })
  @post("{id}")
  static createHee = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
