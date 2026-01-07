import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ekk")
export default class EkkController {
  @operation({
    summary: "Get Ekk",
  })
  @get()
  static getEkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ekk",
  })
  @post("{id}")
  static createEkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
