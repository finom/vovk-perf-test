import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dac")
export default class DacController {
  @operation({
    summary: "Get Dac",
  })
  @get()
  static getDac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dac",
  })
  @post("{id}")
  static createDac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
