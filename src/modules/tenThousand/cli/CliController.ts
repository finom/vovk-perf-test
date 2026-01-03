import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clis")
export default class CliController {
  @operation({
    summary: "Get Clis",
  })
  @get()
  static getClis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cli",
  })
  @post("{id}")
  static createCli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
