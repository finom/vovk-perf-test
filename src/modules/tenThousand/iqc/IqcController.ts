import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqc")
export default class IqcController {
  @operation({
    summary: "Get Iqc",
  })
  @get()
  static getIqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iqc",
  })
  @post("{id}")
  static createIqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
