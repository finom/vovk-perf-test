import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fius")
export default class FiuController {
  @operation({
    summary: "Get Fius",
  })
  @get()
  static getFius = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fiu",
  })
  @post("{id}")
  static createFiu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
