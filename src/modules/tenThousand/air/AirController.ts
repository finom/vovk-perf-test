import { procedure, prefix, get, post, operation } from "vovk";

@prefix("air")
export default class AirController {
  @operation({
    summary: "Get Air",
  })
  @get()
  static getAir = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Air",
  })
  @post("{id}")
  static createAir = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
