import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsj")
export default class NsjController {
  @operation({
    summary: "Get Nsj",
  })
  @get()
  static getNsj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsj",
  })
  @post("{id}")
  static createNsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
