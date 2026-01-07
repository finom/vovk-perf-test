import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kkk")
export default class KkkController {
  @operation({
    summary: "Get Kkk",
  })
  @get()
  static getKkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kkk",
  })
  @post("{id}")
  static createKkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
