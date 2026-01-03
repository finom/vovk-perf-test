import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frds")
export default class FrdController {
  @operation({
    summary: "Get Frds",
  })
  @get()
  static getFrds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frd",
  })
  @post("{id}")
  static createFrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
