import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akds")
export default class AkdController {
  @operation({
    summary: "Get Akds",
  })
  @get()
  static getAkds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Akd",
  })
  @post("{id}")
  static createAkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
