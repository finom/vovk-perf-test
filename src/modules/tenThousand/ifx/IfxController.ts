import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifx")
export default class IfxController {
  @operation({
    summary: "Get Ifx",
  })
  @get()
  static getIfx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ifx",
  })
  @post("{id}")
  static createIfx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
