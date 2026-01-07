import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ktt")
export default class KttController {
  @operation({
    summary: "Get Ktt",
  })
  @get()
  static getKtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ktt",
  })
  @post("{id}")
  static createKtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
