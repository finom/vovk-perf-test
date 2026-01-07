import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aae")
export default class AaeController {
  @operation({
    summary: "Get Aae",
  })
  @get()
  static getAae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aae",
  })
  @post("{id}")
  static createAae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
