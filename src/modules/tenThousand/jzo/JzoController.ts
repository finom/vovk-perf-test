import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzo")
export default class JzoController {
  @operation({
    summary: "Get Jzo",
  })
  @get()
  static getJzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzo",
  })
  @post("{id}")
  static createJzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
