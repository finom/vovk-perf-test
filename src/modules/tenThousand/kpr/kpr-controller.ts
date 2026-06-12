import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kpr")
export default class KprController {
  @operation({
    summary: "Get Kpr",
  })
  @get()
  static getKpr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kpr",
  })
  @post("{id}")
  static createKpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
