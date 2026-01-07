import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atd")
export default class AtdController {
  @operation({
    summary: "Get Atd",
  })
  @get()
  static getAtd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atd",
  })
  @post("{id}")
  static createAtd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
