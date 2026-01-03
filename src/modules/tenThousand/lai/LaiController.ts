import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lais")
export default class LaiController {
  @operation({
    summary: "Get Lais",
  })
  @get()
  static getLais = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lai",
  })
  @post("{id}")
  static createLai = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
