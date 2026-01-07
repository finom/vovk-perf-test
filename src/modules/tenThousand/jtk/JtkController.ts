import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtk")
export default class JtkController {
  @operation({
    summary: "Get Jtk",
  })
  @get()
  static getJtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jtk",
  })
  @post("{id}")
  static createJtk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
