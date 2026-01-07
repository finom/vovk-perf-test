import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jau")
export default class JauController {
  @operation({
    summary: "Get Jau",
  })
  @get()
  static getJau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jau",
  })
  @post("{id}")
  static createJau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
