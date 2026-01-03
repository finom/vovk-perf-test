import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jals")
export default class JalController {
  @operation({
    summary: "Get Jals",
  })
  @get()
  static getJals = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jal",
  })
  @post("{id}")
  static createJal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
