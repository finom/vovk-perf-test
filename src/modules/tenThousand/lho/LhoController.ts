import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lho")
export default class LhoController {
  @operation({
    summary: "Get Lho",
  })
  @get()
  static getLho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lho",
  })
  @post("{id}")
  static createLho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
