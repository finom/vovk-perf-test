import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bym")
export default class BymController {
  @operation({
    summary: "Get Bym",
  })
  @get()
  static getBym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bym",
  })
  @post("{id}")
  static createBym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
