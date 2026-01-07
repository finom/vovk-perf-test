import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jou")
export default class JouController {
  @operation({
    summary: "Get Jou",
  })
  @get()
  static getJou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jou",
  })
  @post("{id}")
  static createJou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
