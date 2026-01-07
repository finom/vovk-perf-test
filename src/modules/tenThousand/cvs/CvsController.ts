import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cvs")
export default class CvsController {
  @operation({
    summary: "Get Cvs",
  })
  @get()
  static getCvs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cvs",
  })
  @post("{id}")
  static createCvs = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
