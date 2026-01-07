import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehy")
export default class EhyController {
  @operation({
    summary: "Get Ehy",
  })
  @get()
  static getEhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehy",
  })
  @post("{id}")
  static createEhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
