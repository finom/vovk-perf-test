import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akk")
export default class AkkController {
  @operation({
    summary: "Get Akk",
  })
  @get()
  static getAkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Akk",
  })
  @post("{id}")
  static createAkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
