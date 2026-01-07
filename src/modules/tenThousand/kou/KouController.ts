import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kou")
export default class KouController {
  @operation({
    summary: "Get Kou",
  })
  @get()
  static getKou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kou",
  })
  @post("{id}")
  static createKou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
