import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aub")
export default class AubController {
  @operation({
    summary: "Get Aub",
  })
  @get()
  static getAub = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aub",
  })
  @post("{id}")
  static createAub = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
