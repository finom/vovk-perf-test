import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jr")
export default class JrController {
  @operation({
    summary: "Get Jr",
  })
  @get()
  static getJr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jr",
  })
  @post("{id}")
  static createJr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
