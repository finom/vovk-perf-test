import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jta")
export default class JtaController {
  @operation({
    summary: "Get Jta",
  })
  @get()
  static getJta = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jta",
  })
  @post("{id}")
  static createJta = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
