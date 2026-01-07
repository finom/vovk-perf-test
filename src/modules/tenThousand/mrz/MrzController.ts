import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrz")
export default class MrzController {
  @operation({
    summary: "Get Mrz",
  })
  @get()
  static getMrz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrz",
  })
  @post("{id}")
  static createMrz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
