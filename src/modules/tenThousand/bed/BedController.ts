import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bed")
export default class BedController {
  @operation({
    summary: "Get Bed",
  })
  @get()
  static getBed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bed",
  })
  @post("{id}")
  static createBed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
