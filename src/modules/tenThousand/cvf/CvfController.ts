import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvf")
export default class CvfController {
  @operation({
    summary: "Get Cvf",
  })
  @get()
  static getCvf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvf",
  })
  @post("{id}")
  static createCvf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
