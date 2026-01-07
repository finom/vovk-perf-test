import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cft")
export default class CftController {
  @operation({
    summary: "Get Cft",
  })
  @get()
  static getCft = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cft",
  })
  @post("{id}")
  static createCft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
