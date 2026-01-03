import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jos")
export default class JosController {
  @operation({
    summary: "Get Jos",
  })
  @get()
  static getJos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jos",
  })
  @post("{id}")
  static createJos = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
