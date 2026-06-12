import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("log")
export default class LogController {
  @operation({
    summary: "Get Log",
  })
  @get()
  static getLog = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Log",
  })
  @post("{id}")
  static createLog = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
