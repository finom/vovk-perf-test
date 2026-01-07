import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzn")
export default class BznController {
  @operation({
    summary: "Get Bzn",
  })
  @get()
  static getBzn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzn",
  })
  @post("{id}")
  static createBzn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
