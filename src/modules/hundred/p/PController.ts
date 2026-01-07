import { procedure, prefix, get, post, operation } from "vovk";

@prefix("p")
export default class PController {
  @operation({
    summary: "Get P",
  })
  @get()
  static getP = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create P",
  })
  @post("{id}")
  static createP = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
