import { procedure, prefix, get, post, operation } from "vovk";

@prefix("had")
export default class HadController {
  @operation({
    summary: "Get Had",
  })
  @get()
  static getHad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Had",
  })
  @post("{id}")
  static createHad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
