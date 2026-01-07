import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwo")
export default class KwoController {
  @operation({
    summary: "Get Kwo",
  })
  @get()
  static getKwo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwo",
  })
  @post("{id}")
  static createKwo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
