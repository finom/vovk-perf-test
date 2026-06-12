import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kob")
export default class KobController {
  @operation({
    summary: "Get Kob",
  })
  @get()
  static getKob = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kob",
  })
  @post("{id}")
  static createKob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
