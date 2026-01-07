import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmx")
export default class DmxController {
  @operation({
    summary: "Get Dmx",
  })
  @get()
  static getDmx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmx",
  })
  @post("{id}")
  static createDmx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
