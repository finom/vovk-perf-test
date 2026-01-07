import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hol")
export default class HolController {
  @operation({
    summary: "Get Hol",
  })
  @get()
  static getHol = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hol",
  })
  @post("{id}")
  static createHol = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
