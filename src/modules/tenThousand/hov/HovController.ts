import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hov")
export default class HovController {
  @operation({
    summary: "Get Hov",
  })
  @get()
  static getHov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hov",
  })
  @post("{id}")
  static createHov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
