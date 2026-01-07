import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvd")
export default class DvdController {
  @operation({
    summary: "Get Dvd",
  })
  @get()
  static getDvd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvd",
  })
  @post("{id}")
  static createDvd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
