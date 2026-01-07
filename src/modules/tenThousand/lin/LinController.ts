import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lin")
export default class LinController {
  @operation({
    summary: "Get Lin",
  })
  @get()
  static getLin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lin",
  })
  @post("{id}")
  static createLin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
