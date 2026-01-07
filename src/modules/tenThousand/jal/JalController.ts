import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jal")
export default class JalController {
  @operation({
    summary: "Get Jal",
  })
  @get()
  static getJal = procedure({
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
