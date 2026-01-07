import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nch")
export default class NchController {
  @operation({
    summary: "Get Nch",
  })
  @get()
  static getNch = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nch",
  })
  @post("{id}")
  static createNch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
