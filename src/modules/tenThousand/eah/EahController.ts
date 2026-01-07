import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eah")
export default class EahController {
  @operation({
    summary: "Get Eah",
  })
  @get()
  static getEah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eah",
  })
  @post("{id}")
  static createEah = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
