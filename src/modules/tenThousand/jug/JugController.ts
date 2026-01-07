import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jug")
export default class JugController {
  @operation({
    summary: "Get Jug",
  })
  @get()
  static getJug = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jug",
  })
  @post("{id}")
  static createJug = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
