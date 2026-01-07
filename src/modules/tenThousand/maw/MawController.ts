import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maw")
export default class MawController {
  @operation({
    summary: "Get Maw",
  })
  @get()
  static getMaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Maw",
  })
  @post("{id}")
  static createMaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
