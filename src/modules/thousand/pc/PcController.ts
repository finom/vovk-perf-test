import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pc")
export default class PcController {
  @operation({
    summary: "Get Pc",
  })
  @get()
  static getPc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pc",
  })
  @post("{id}")
  static createPc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
