import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hru")
export default class HruController {
  @operation({
    summary: "Get Hru",
  })
  @get()
  static getHru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hru",
  })
  @post("{id}")
  static createHru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
