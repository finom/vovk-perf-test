import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgi")
export default class JgiController {
  @operation({
    summary: "Get Jgi",
  })
  @get()
  static getJgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jgi",
  })
  @post("{id}")
  static createJgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
