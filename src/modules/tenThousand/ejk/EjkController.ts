import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejk")
export default class EjkController {
  @operation({
    summary: "Get Ejk",
  })
  @get()
  static getEjk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ejk",
  })
  @post("{id}")
  static createEjk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
