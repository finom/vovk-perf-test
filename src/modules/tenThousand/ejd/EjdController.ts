import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ejds")
export default class EjdController {
  @operation({
    summary: "Get Ejds",
  })
  @get()
  static getEjds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ejd",
  })
  @post("{id}")
  static createEjd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
