import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msbs")
export default class MsbController {
  @operation({
    summary: "Get Msbs",
  })
  @get()
  static getMsbs = procedure({
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
