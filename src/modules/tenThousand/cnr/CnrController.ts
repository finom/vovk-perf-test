import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnr")
export default class CnrController {
  @operation({
    summary: "Get Cnr",
  })
  @get()
  static getCnr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnr",
  })
  @post("{id}")
  static createCnr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
