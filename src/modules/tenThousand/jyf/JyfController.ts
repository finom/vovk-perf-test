import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyf")
export default class JyfController {
  @operation({
    summary: "Get Jyf",
  })
  @get()
  static getJyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyf",
  })
  @post("{id}")
  static createJyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
