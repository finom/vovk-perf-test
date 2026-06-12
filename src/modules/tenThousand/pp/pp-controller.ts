import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("pp")
export default class PpController {
  @operation({
    summary: "Get Pp",
  })
  @get()
  static getPp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Pp",
  })
  @post("{id}")
  static createPp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
