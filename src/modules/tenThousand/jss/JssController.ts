import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jss")
export default class JssController {
  @operation({
    summary: "Get Jss",
  })
  @get()
  static getJss = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jss",
  })
  @post("{id}")
  static createJss = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
