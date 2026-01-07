import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvn")
export default class CvnController {
  @operation({
    summary: "Get Cvn",
  })
  @get()
  static getCvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvn",
  })
  @post("{id}")
  static createCvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
