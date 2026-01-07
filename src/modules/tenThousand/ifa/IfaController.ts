import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifa")
export default class IfaController {
  @operation({
    summary: "Get Ifa",
  })
  @get()
  static getIfa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifa",
  })
  @post("{id}")
  static createIfa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
