import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fyr")
export default class FyrController {
  @operation({
    summary: "Get Fyr",
  })
  @get()
  static getFyr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fyr",
  })
  @post("{id}")
  static createFyr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
