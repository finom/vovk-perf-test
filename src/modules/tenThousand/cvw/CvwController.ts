import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvw")
export default class CvwController {
  @operation({
    summary: "Get Cvw",
  })
  @get()
  static getCvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvw",
  })
  @post("{id}")
  static createCvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
