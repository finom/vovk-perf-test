import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bl")
export default class BlController {
  @operation({
    summary: "Get Bl",
  })
  @get()
  static getBl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bl",
  })
  @post("{id}")
  static createBl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
