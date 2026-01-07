import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mum")
export default class MumController {
  @operation({
    summary: "Get Mum",
  })
  @get()
  static getMum = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mum",
  })
  @post("{id}")
  static createMum = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
