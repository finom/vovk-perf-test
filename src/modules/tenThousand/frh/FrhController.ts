import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frh")
export default class FrhController {
  @operation({
    summary: "Get Frh",
  })
  @get()
  static getFrh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Frh",
  })
  @post("{id}")
  static createFrh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
