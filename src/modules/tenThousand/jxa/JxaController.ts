import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxa")
export default class JxaController {
  @operation({
    summary: "Get Jxa",
  })
  @get()
  static getJxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jxa",
  })
  @post("{id}")
  static createJxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
