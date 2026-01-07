import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daq")
export default class DaqController {
  @operation({
    summary: "Get Daq",
  })
  @get()
  static getDaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Daq",
  })
  @post("{id}")
  static createDaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
