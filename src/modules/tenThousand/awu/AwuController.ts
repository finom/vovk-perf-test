import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awu")
export default class AwuController {
  @operation({
    summary: "Get Awu",
  })
  @get()
  static getAwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awu",
  })
  @post("{id}")
  static createAwu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
