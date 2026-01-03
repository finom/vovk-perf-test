import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmxes")
export default class DmxController {
  @operation({
    summary: "Get Dmxes",
  })
  @get()
  static getDmxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmx",
  })
  @post("{id}")
  static createDmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
