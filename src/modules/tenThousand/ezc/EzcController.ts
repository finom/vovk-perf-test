import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezc")
export default class EzcController {
  @operation({
    summary: "Get Ezc",
  })
  @get()
  static getEzc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezc",
  })
  @post("{id}")
  static createEzc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
