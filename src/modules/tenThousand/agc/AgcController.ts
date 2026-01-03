import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agcs")
export default class AgcController {
  @operation({
    summary: "Get Agcs",
  })
  @get()
  static getAgcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agc",
  })
  @post("{id}")
  static createAgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
