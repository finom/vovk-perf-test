import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbt")
export default class HbtController {
  @operation({
    summary: "Get Hbt",
  })
  @get()
  static getHbt = procedure({
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
