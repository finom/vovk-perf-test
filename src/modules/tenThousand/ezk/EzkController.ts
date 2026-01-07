import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezk")
export default class EzkController {
  @operation({
    summary: "Get Ezk",
  })
  @get()
  static getEzk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezk",
  })
  @post("{id}")
  static createEzk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
