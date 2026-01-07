import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mnw")
export default class MnwController {
  @operation({
    summary: "Get Mnw",
  })
  @get()
  static getMnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnw",
  })
  @post("{id}")
  static createMnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
