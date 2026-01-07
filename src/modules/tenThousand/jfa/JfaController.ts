import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfa")
export default class JfaController {
  @operation({
    summary: "Get Jfa",
  })
  @get()
  static getJfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfa",
  })
  @post("{id}")
  static createJfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
