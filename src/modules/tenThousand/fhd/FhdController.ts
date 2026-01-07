import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhd")
export default class FhdController {
  @operation({
    summary: "Get Fhd",
  })
  @get()
  static getFhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhd",
  })
  @post("{id}")
  static createFhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
