import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dr")
export default class DrController {
  @operation({
    summary: "Get Dr",
  })
  @get()
  static getDr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dr",
  })
  @post("{id}")
  static createDr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
