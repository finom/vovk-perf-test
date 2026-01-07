import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ah")
export default class AhController {
  @operation({
    summary: "Get Ah",
  })
  @get()
  static getAh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ah",
  })
  @post("{id}")
  static createAh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
