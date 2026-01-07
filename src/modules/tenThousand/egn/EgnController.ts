import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egn")
export default class EgnController {
  @operation({
    summary: "Get Egn",
  })
  @get()
  static getEgn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Egn",
  })
  @post("{id}")
  static createEgn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
