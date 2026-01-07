import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ama")
export default class AmaController {
  @operation({
    summary: "Get Ama",
  })
  @get()
  static getAma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ama",
  })
  @post("{id}")
  static createAma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
