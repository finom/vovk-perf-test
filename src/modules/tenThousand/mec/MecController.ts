import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mec")
export default class MecController {
  @operation({
    summary: "Get Mec",
  })
  @get()
  static getMec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mec",
  })
  @post("{id}")
  static createMec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
