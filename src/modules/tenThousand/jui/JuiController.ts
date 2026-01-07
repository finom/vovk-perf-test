import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jui")
export default class JuiController {
  @operation({
    summary: "Get Jui",
  })
  @get()
  static getJui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jui",
  })
  @post("{id}")
  static createJui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
