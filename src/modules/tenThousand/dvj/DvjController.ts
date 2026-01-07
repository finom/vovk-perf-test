import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dvj")
export default class DvjController {
  @operation({
    summary: "Get Dvj",
  })
  @get()
  static getDvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dvj",
  })
  @post("{id}")
  static createDvj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
