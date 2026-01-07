import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmx")
export default class FmxController {
  @operation({
    summary: "Get Fmx",
  })
  @get()
  static getFmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fmx",
  })
  @post("{id}")
  static createFmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
