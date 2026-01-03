import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cems")
export default class CemController {
  @operation({
    summary: "Get Cems",
  })
  @get()
  static getCems = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cem",
  })
  @post("{id}")
  static createCem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
