import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iot")
export default class IotController {
  @operation({
    summary: "Get Iot",
  })
  @get()
  static getIot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iot",
  })
  @post("{id}")
  static createIot = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
