import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhl")
export default class LhlController {
  @operation({
    summary: "Get Lhl",
  })
  @get()
  static getLhl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhl",
  })
  @post("{id}")
  static createLhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
