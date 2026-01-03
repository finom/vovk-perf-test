import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njes")
export default class NjeController {
  @operation({
    summary: "Get Njes",
  })
  @get()
  static getNjes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nje",
  })
  @post("{id}")
  static createNje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
