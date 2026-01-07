import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gae")
export default class GaeController {
  @operation({
    summary: "Get Gae",
  })
  @get()
  static getGae = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gae",
  })
  @post("{id}")
  static createGae = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
