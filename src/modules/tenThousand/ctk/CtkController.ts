import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctk")
export default class CtkController {
  @operation({
    summary: "Get Ctk",
  })
  @get()
  static getCtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctk",
  })
  @post("{id}")
  static createCtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
