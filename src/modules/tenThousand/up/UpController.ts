import { procedure, prefix, get, post, operation } from "vovk";

@prefix("up")
export default class UpController {
  @operation({
    summary: "Get Up",
  })
  @get()
  static getUp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Up",
  })
  @post("{id}")
  static createUp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
