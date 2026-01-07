import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knx")
export default class KnxController {
  @operation({
    summary: "Get Knx",
  })
  @get()
  static getKnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knx",
  })
  @post("{id}")
  static createKnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
