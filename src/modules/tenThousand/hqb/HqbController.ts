import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqb")
export default class HqbController {
  @operation({
    summary: "Get Hqb",
  })
  @get()
  static getHqb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hqb",
  })
  @post("{id}")
  static createHqb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
