import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lnh")
export default class LnhController {
  @operation({
    summary: "Get Lnh",
  })
  @get()
  static getLnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lnh",
  })
  @post("{id}")
  static createLnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
