import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mio")
export default class MioController {
  @operation({
    summary: "Get Mio",
  })
  @get()
  static getMio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mio",
  })
  @post("{id}")
  static createMio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
