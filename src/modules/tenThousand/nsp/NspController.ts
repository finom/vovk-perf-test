import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsps")
export default class NspController {
  @operation({
    summary: "Get Nsps",
  })
  @get()
  static getNsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsp",
  })
  @post("{id}")
  static createNsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
