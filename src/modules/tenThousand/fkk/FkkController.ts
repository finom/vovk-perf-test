import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkk")
export default class FkkController {
  @operation({
    summary: "Get Fkk",
  })
  @get()
  static getFkk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fkk",
  })
  @post("{id}")
  static createFkk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
