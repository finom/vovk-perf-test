import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqc")
export default class AqcController {
  @operation({
    summary: "Get Aqc",
  })
  @get()
  static getAqc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqc",
  })
  @post("{id}")
  static createAqc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
