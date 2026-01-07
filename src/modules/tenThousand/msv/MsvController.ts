import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msv")
export default class MsvController {
  @operation({
    summary: "Get Msv",
  })
  @get()
  static getMsv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msv",
  })
  @post("{id}")
  static createMsv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
