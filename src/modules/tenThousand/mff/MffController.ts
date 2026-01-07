import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mff")
export default class MffController {
  @operation({
    summary: "Get Mff",
  })
  @get()
  static getMff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mff",
  })
  @post("{id}")
  static createMff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
