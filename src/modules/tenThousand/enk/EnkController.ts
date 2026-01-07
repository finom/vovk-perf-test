import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enk")
export default class EnkController {
  @operation({
    summary: "Get Enk",
  })
  @get()
  static getEnk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enk",
  })
  @post("{id}")
  static createEnk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
