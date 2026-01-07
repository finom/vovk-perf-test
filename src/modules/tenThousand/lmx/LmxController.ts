import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmx")
export default class LmxController {
  @operation({
    summary: "Get Lmx",
  })
  @get()
  static getLmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lmx",
  })
  @post("{id}")
  static createLmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
