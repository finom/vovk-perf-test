import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnu")
export default class HnuController {
  @operation({
    summary: "Get Hnu",
  })
  @get()
  static getHnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hnu",
  })
  @post("{id}")
  static createHnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
