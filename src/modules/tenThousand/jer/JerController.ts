import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jers")
export default class JerController {
  @operation({
    summary: "Get Jers",
  })
  @get()
  static getJers = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jer",
  })
  @post("{id}")
  static createJer = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
