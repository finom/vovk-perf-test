import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyd")
export default class GydController {
  @operation({
    summary: "Get Gyd",
  })
  @get()
  static getGyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyd",
  })
  @post("{id}")
  static createGyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
