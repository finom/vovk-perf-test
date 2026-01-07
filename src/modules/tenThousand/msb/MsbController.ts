import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msb")
export default class MsbController {
  @operation({
    summary: "Get Msb",
  })
  @get()
  static getMsb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msb",
  })
  @post("{id}")
  static createMsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
