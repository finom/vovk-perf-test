import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mie")
export default class MieController {
  @operation({
    summary: "Get Mie",
  })
  @get()
  static getMie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mie",
  })
  @post("{id}")
  static createMie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
