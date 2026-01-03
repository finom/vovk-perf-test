import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvds")
export default class HvdController {
  @operation({
    summary: "Get Hvds",
  })
  @get()
  static getHvds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hvd",
  })
  @post("{id}")
  static createHvd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
