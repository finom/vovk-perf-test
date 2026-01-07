import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noe")
export default class NoeController {
  @operation({
    summary: "Get Noe",
  })
  @get()
  static getNoe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noe",
  })
  @post("{id}")
  static createNoe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
