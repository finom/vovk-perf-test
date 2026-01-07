import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezn")
export default class EznController {
  @operation({
    summary: "Get Ezn",
  })
  @get()
  static getEzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezn",
  })
  @post("{id}")
  static createEzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
