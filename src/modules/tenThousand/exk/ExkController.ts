import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exk")
export default class ExkController {
  @operation({
    summary: "Get Exk",
  })
  @get()
  static getExk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exk",
  })
  @post("{id}")
  static createExk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
