import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsg")
export default class JsgController {
  @operation({
    summary: "Get Jsg",
  })
  @get()
  static getJsg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsg",
  })
  @post("{id}")
  static createJsg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
