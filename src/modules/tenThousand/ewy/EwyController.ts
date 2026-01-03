import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewies")
export default class EwyController {
  @operation({
    summary: "Get Ewies",
  })
  @get()
  static getEwies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ewy",
  })
  @post("{id}")
  static createEwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
