import { procedure, prefix, get, post, operation } from "vovk";

@prefix("awd")
export default class AwdController {
  @operation({
    summary: "Get Awd",
  })
  @get()
  static getAwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Awd",
  })
  @post("{id}")
  static createAwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
