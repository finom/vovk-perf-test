import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mig")
export default class MigController {
  @operation({
    summary: "Get Mig",
  })
  @get()
  static getMig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mig",
  })
  @post("{id}")
  static createMig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
