import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbo")
export default class GboController {
  @operation({
    summary: "Get Gbo",
  })
  @get()
  static getGbo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbo",
  })
  @post("{id}")
  static createGbo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
