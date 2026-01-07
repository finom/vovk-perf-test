import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyk")
export default class FykController {
  @operation({
    summary: "Get Fyk",
  })
  @get()
  static getFyk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyk",
  })
  @post("{id}")
  static createFyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
