import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gols")
export default class GolController {
  @operation({
    summary: "Get Gols",
  })
  @get()
  static getGols = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gol",
  })
  @post("{id}")
  static createGol = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
