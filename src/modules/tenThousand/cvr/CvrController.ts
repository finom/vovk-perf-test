import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvr")
export default class CvrController {
  @operation({
    summary: "Get Cvr",
  })
  @get()
  static getCvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvr",
  })
  @post("{id}")
  static createCvr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
