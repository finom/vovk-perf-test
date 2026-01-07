import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvw")
export default class DvwController {
  @operation({
    summary: "Get Dvw",
  })
  @get()
  static getDvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvw",
  })
  @post("{id}")
  static createDvw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
