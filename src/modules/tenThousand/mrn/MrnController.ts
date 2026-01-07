import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrn")
export default class MrnController {
  @operation({
    summary: "Get Mrn",
  })
  @get()
  static getMrn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrn",
  })
  @post("{id}")
  static createMrn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
