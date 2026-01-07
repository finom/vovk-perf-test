import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyr")
export default class GyrController {
  @operation({
    summary: "Get Gyr",
  })
  @get()
  static getGyr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyr",
  })
  @post("{id}")
  static createGyr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
