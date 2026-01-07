import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrz")
export default class MrzController {
  @operation({
    summary: "Get Mrz",
  })
  @get()
  static getMrz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrz",
  })
  @post("{id}")
  static createMrz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
