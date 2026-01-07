import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvx")
export default class CvxController {
  @operation({
    summary: "Get Cvx",
  })
  @get()
  static getCvx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvx",
  })
  @post("{id}")
  static createCvx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
