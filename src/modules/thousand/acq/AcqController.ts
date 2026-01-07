import { procedure, prefix, get, post, operation } from "vovk";

@prefix("acq")
export default class AcqController {
  @operation({
    summary: "Get Acq",
  })
  @get()
  static getAcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Acq",
  })
  @post("{id}")
  static createAcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
