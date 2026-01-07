import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbd")
export default class KbdController {
  @operation({
    summary: "Get Kbd",
  })
  @get()
  static getKbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbd",
  })
  @post("{id}")
  static createKbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
