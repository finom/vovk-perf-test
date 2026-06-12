import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksv")
export default class KsvController {
  @operation({
    summary: "Get Ksv",
  })
  @get()
  static getKsv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksv",
  })
  @post("{id}")
  static createKsv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
