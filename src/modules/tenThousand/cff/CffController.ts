import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cff")
export default class CffController {
  @operation({
    summary: "Get Cff",
  })
  @get()
  static getCff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cff",
  })
  @post("{id}")
  static createCff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
