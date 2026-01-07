import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gld")
export default class GldController {
  @operation({
    summary: "Get Gld",
  })
  @get()
  static getGld = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gld",
  })
  @post("{id}")
  static createGld = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
