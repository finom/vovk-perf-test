import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pm")
export default class PmController {
  @operation({
    summary: "Get Pm",
  })
  @get()
  static getPm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Pm",
  })
  @post("{id}")
  static createPm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
