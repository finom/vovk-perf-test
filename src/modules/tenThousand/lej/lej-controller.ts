import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lej")
export default class LejController {
  @operation({
    summary: "Get Lej",
  })
  @get()
  static getLej = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lej",
  })
  @post("{id}")
  static createLej = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
