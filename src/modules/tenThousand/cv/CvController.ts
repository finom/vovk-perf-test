import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cv")
export default class CvController {
  @operation({
    summary: "Get Cv",
  })
  @get()
  static getCv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cv",
  })
  @post("{id}")
  static createCv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
