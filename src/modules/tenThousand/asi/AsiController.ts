import { procedure, prefix, get, post, operation } from "vovk";

@prefix("asi")
export default class AsiController {
  @operation({
    summary: "Get Asi",
  })
  @get()
  static getAsi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asi",
  })
  @post("{id}")
  static createAsi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
