import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcu")
export default class McuController {
  @operation({
    summary: "Get Mcu",
  })
  @get()
  static getMcu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mcu",
  })
  @post("{id}")
  static createMcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
