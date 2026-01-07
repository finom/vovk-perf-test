import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ney")
export default class NeyController {
  @operation({
    summary: "Get Ney",
  })
  @get()
  static getNey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ney",
  })
  @post("{id}")
  static createNey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
