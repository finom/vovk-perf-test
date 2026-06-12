import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cmd")
export default class CmdController {
  @operation({
    summary: "Get Cmd",
  })
  @get()
  static getCmd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cmd",
  })
  @post("{id}")
  static createCmd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
