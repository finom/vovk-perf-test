import { procedure, prefix, get, post, operation } from "vovk";

@prefix("je")
export default class JeController {
  @operation({
    summary: "Get Je",
  })
  @get()
  static getJe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Je",
  })
  @post("{id}")
  static createJe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
