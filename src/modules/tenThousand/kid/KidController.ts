import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kid")
export default class KidController {
  @operation({
    summary: "Get Kid",
  })
  @get()
  static getKid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kid",
  })
  @post("{id}")
  static createKid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
