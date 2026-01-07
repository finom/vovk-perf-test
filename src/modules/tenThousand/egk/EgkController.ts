import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egk")
export default class EgkController {
  @operation({
    summary: "Get Egk",
  })
  @get()
  static getEgk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egk",
  })
  @post("{id}")
  static createEgk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
