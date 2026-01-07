import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoi")
export default class HoiController {
  @operation({
    summary: "Get Hoi",
  })
  @get()
  static getHoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoi",
  })
  @post("{id}")
  static createHoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
