import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjd")
export default class JjdController {
  @operation({
    summary: "Get Jjd",
  })
  @get()
  static getJjd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjd",
  })
  @post("{id}")
  static createJjd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
