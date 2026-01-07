import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fhl")
export default class FhlController {
  @operation({
    summary: "Get Fhl",
  })
  @get()
  static getFhl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fhl",
  })
  @post("{id}")
  static createFhl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
