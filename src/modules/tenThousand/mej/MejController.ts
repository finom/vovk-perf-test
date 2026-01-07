import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mej")
export default class MejController {
  @operation({
    summary: "Get Mej",
  })
  @get()
  static getMej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mej",
  })
  @post("{id}")
  static createMej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
