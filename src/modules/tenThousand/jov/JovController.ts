import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jov")
export default class JovController {
  @operation({
    summary: "Get Jov",
  })
  @get()
  static getJov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jov",
  })
  @post("{id}")
  static createJov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
