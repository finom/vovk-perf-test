import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ncn")
export default class NcnController {
  @operation({
    summary: "Get Ncn",
  })
  @get()
  static getNcn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ncn",
  })
  @post("{id}")
  static createNcn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
