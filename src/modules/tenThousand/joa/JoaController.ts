import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joa")
export default class JoaController {
  @operation({
    summary: "Get Joa",
  })
  @get()
  static getJoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joa",
  })
  @post("{id}")
  static createJoa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
