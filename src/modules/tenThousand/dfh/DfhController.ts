import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dfh")
export default class DfhController {
  @operation({
    summary: "Get Dfh",
  })
  @get()
  static getDfh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfh",
  })
  @post("{id}")
  static createDfh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
