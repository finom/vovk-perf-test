import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyo")
export default class JyoController {
  @operation({
    summary: "Get Jyo",
  })
  @get()
  static getJyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyo",
  })
  @post("{id}")
  static createJyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
