import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jis")
export default class JisController {
  @operation({
    summary: "Get Jis",
  })
  @get()
  static getJis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jis",
  })
  @post("{id}")
  static createJis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
