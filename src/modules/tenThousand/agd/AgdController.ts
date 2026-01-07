import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agd")
export default class AgdController {
  @operation({
    summary: "Get Agd",
  })
  @get()
  static getAgd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agd",
  })
  @post("{id}")
  static createAgd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
