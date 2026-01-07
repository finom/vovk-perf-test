import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gch")
export default class GchController {
  @operation({
    summary: "Get Gch",
  })
  @get()
  static getGch = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gch",
  })
  @post("{id}")
  static createGch = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
