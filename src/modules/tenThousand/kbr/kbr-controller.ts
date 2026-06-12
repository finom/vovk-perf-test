import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kbr")
export default class KbrController {
  @operation({
    summary: "Get Kbr",
  })
  @get()
  static getKbr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kbr",
  })
  @post("{id}")
  static createKbr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
