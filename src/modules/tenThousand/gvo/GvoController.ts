import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gvo")
export default class GvoController {
  @operation({
    summary: "Get Gvo",
  })
  @get()
  static getGvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gvo",
  })
  @post("{id}")
  static createGvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
