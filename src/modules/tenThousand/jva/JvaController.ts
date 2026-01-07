import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jva")
export default class JvaController {
  @operation({
    summary: "Get Jva",
  })
  @get()
  static getJva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jva",
  })
  @post("{id}")
  static createJva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
