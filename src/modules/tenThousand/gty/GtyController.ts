import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gty")
export default class GtyController {
  @operation({
    summary: "Get Gty",
  })
  @get()
  static getGty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gty",
  })
  @post("{id}")
  static createGty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
