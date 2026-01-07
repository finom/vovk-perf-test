import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggo")
export default class GgoController {
  @operation({
    summary: "Get Ggo",
  })
  @get()
  static getGgo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ggo",
  })
  @post("{id}")
  static createGgo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
