import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eui")
export default class EuiController {
  @operation({
    summary: "Get Eui",
  })
  @get()
  static getEui = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eui",
  })
  @post("{id}")
  static createEui = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
