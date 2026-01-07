import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgl")
export default class FglController {
  @operation({
    summary: "Get Fgl",
  })
  @get()
  static getFgl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgl",
  })
  @post("{id}")
  static createFgl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
