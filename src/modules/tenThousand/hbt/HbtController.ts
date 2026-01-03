import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbts")
export default class HbtController {
  @operation({
    summary: "Get Hbts",
  })
  @get()
  static getHbts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbt",
  })
  @post("{id}")
  static createHbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
