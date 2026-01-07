import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ats")
export default class AtsController {
  @operation({
    summary: "Get Ats",
  })
  @get()
  static getAts = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ats",
  })
  @post("{id}")
  static createAts = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
