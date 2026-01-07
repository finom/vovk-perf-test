import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmu")
export default class FmuController {
  @operation({
    summary: "Get Fmu",
  })
  @get()
  static getFmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmu",
  })
  @post("{id}")
  static createFmu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
