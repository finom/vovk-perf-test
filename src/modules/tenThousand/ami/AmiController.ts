import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ami")
export default class AmiController {
  @operation({
    summary: "Get Ami",
  })
  @get()
  static getAmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ami",
  })
  @post("{id}")
  static createAmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
