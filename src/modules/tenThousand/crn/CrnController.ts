import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crn")
export default class CrnController {
  @operation({
    summary: "Get Crn",
  })
  @get()
  static getCrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crn",
  })
  @post("{id}")
  static createCrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
