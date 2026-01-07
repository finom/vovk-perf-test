import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gep")
export default class GepController {
  @operation({
    summary: "Get Gep",
  })
  @get()
  static getGep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gep",
  })
  @post("{id}")
  static createGep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
