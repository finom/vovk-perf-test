import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hrh")
export default class HrhController {
  @operation({
    summary: "Get Hrh",
  })
  @get()
  static getHrh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hrh",
  })
  @post("{id}")
  static createHrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
