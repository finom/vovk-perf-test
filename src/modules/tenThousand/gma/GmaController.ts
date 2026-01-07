import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gma")
export default class GmaController {
  @operation({
    summary: "Get Gma",
  })
  @get()
  static getGma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gma",
  })
  @post("{id}")
  static createGma = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
