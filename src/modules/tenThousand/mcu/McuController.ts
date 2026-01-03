import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcus")
export default class McuController {
  @operation({
    summary: "Get Mcus",
  })
  @get()
  static getMcus = procedure({
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
