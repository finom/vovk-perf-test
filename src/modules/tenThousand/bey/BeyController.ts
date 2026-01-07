import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bey")
export default class BeyController {
  @operation({
    summary: "Get Bey",
  })
  @get()
  static getBey = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bey",
  })
  @post("{id}")
  static createBey = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
