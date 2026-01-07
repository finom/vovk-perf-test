import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emr")
export default class EmrController {
  @operation({
    summary: "Get Emr",
  })
  @get()
  static getEmr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emr",
  })
  @post("{id}")
  static createEmr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
