import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gaz")
export default class GazController {
  @operation({
    summary: "Get Gaz",
  })
  @get()
  static getGaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gaz",
  })
  @post("{id}")
  static createGaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
