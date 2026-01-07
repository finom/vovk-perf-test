import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bil")
export default class BilController {
  @operation({
    summary: "Get Bil",
  })
  @get()
  static getBil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bil",
  })
  @post("{id}")
  static createBil = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
