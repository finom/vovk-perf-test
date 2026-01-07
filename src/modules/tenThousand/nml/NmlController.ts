import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nml")
export default class NmlController {
  @operation({
    summary: "Get Nml",
  })
  @get()
  static getNml = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nml",
  })
  @post("{id}")
  static createNml = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
