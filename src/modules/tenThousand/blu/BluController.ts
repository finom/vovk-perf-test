import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blu")
export default class BluController {
  @operation({
    summary: "Get Blu",
  })
  @get()
  static getBlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blu",
  })
  @post("{id}")
  static createBlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
