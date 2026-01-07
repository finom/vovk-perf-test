import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gew")
export default class GewController {
  @operation({
    summary: "Get Gew",
  })
  @get()
  static getGew = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gew",
  })
  @post("{id}")
  static createGew = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
