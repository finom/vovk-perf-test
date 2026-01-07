import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hoq")
export default class HoqController {
  @operation({
    summary: "Get Hoq",
  })
  @get()
  static getHoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hoq",
  })
  @post("{id}")
  static createHoq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
