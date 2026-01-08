import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cli")
export default class CliController {
  @operation({
    summary: "Get Cli",
  })
  @get()
  static getCli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cli",
  })
  @post("{id}")
  static createCli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
