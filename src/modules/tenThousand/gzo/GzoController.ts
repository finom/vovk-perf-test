import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gzo")
export default class GzoController {
  @operation({
    summary: "Get Gzo",
  })
  @get()
  static getGzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gzo",
  })
  @post("{id}")
  static createGzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
