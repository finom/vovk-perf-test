import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tf")
export default class TfController {
  @operation({
    summary: "Get Tf",
  })
  @get()
  static getTf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tf",
  })
  @post("{id}")
  static createTf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
