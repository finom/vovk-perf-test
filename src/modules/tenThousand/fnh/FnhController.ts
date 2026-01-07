import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fnh")
export default class FnhController {
  @operation({
    summary: "Get Fnh",
  })
  @get()
  static getFnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnh",
  })
  @post("{id}")
  static createFnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
