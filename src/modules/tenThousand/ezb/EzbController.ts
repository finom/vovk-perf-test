import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezb")
export default class EzbController {
  @operation({
    summary: "Get Ezb",
  })
  @get()
  static getEzb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezb",
  })
  @post("{id}")
  static createEzb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
