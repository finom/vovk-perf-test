import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzo")
export default class FzoController {
  @operation({
    summary: "Get Fzo",
  })
  @get()
  static getFzo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzo",
  })
  @post("{id}")
  static createFzo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
