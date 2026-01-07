import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvo")
export default class JvoController {
  @operation({
    summary: "Get Jvo",
  })
  @get()
  static getJvo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvo",
  })
  @post("{id}")
  static createJvo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
