import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mho")
export default class MhoController {
  @operation({
    summary: "Get Mho",
  })
  @get()
  static getMho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mho",
  })
  @post("{id}")
  static createMho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
