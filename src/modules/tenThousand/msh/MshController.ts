import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msh")
export default class MshController {
  @operation({
    summary: "Get Msh",
  })
  @get()
  static getMsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msh",
  })
  @post("{id}")
  static createMsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
