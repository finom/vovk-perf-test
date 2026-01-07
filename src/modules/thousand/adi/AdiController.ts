import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adi")
export default class AdiController {
  @operation({
    summary: "Get Adi",
  })
  @get()
  static getAdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adi",
  })
  @post("{id}")
  static createAdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
