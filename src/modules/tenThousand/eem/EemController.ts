import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eem")
export default class EemController {
  @operation({
    summary: "Get Eem",
  })
  @get()
  static getEem = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eem",
  })
  @post("{id}")
  static createEem = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
