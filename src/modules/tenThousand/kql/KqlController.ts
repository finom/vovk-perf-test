import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kql")
export default class KqlController {
  @operation({
    summary: "Get Kql",
  })
  @get()
  static getKql = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kql",
  })
  @post("{id}")
  static createKql = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
