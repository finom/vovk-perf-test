import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jsd")
export default class JsdController {
  @operation({
    summary: "Get Jsd",
  })
  @get()
  static getJsd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jsd",
  })
  @post("{id}")
  static createJsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
