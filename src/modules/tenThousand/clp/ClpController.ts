import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clp")
export default class ClpController {
  @operation({
    summary: "Get Clp",
  })
  @get()
  static getClp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clp",
  })
  @post("{id}")
  static createClp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
