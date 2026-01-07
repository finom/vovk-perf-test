import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bok")
export default class BokController {
  @operation({
    summary: "Get Bok",
  })
  @get()
  static getBok = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bok",
  })
  @post("{id}")
  static createBok = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
