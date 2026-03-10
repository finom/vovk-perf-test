import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsv")
export default class LsvController {
  @operation({
    summary: "Get Lsv",
  })
  @get()
  static getLsv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lsv",
  })
  @post("{id}")
  static createLsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
