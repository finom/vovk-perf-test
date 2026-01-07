import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awl")
export default class AwlController {
  @operation({
    summary: "Get Awl",
  })
  @get()
  static getAwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awl",
  })
  @post("{id}")
  static createAwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
