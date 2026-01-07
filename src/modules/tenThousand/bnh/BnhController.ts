import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnh")
export default class BnhController {
  @operation({
    summary: "Get Bnh",
  })
  @get()
  static getBnh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bnh",
  })
  @post("{id}")
  static createBnh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
