import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqd")
export default class GqdController {
  @operation({
    summary: "Get Gqd",
  })
  @get()
  static getGqd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqd",
  })
  @post("{id}")
  static createGqd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
