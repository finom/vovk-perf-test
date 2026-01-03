import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdus")
export default class JduController {
  @operation({
    summary: "Get Jdus",
  })
  @get()
  static getJdus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jdu",
  })
  @post("{id}")
  static createJdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
