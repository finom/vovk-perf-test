import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btn")
export default class BtnController {
  @operation({
    summary: "Get Btn",
  })
  @get()
  static getBtn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btn",
  })
  @post("{id}")
  static createBtn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
