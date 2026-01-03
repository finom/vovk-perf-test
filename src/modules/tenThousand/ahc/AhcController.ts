import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahcs")
export default class AhcController {
  @operation({
    summary: "Get Ahcs",
  })
  @get()
  static getAhcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahc",
  })
  @post("{id}")
  static createAhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
