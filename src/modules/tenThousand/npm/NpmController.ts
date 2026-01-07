import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npm")
export default class NpmController {
  @operation({
    summary: "Get Npm",
  })
  @get()
  static getNpm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npm",
  })
  @post("{id}")
  static createNpm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
