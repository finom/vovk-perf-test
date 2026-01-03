import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvas")
export default class MvaController {
  @operation({
    summary: "Get Mvas",
  })
  @get()
  static getMvas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mva",
  })
  @post("{id}")
  static createMva = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
