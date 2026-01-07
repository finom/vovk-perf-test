import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jle")
export default class JleController {
  @operation({
    summary: "Get Jle",
  })
  @get()
  static getJle = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jle",
  })
  @post("{id}")
  static createJle = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
