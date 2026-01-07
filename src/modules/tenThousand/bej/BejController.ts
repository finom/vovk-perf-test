import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bej")
export default class BejController {
  @operation({
    summary: "Get Bej",
  })
  @get()
  static getBej = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bej",
  })
  @post("{id}")
  static createBej = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
