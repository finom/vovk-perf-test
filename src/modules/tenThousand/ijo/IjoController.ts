import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ijo")
export default class IjoController {
  @operation({
    summary: "Get Ijo",
  })
  @get()
  static getIjo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijo",
  })
  @post("{id}")
  static createIjo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
