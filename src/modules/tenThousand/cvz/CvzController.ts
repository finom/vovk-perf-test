import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvz")
export default class CvzController {
  @operation({
    summary: "Get Cvz",
  })
  @get()
  static getCvz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvz",
  })
  @post("{id}")
  static createCvz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
