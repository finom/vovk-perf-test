import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mm")
export default class MmController {
  @operation({
    summary: "Get Mm",
  })
  @get()
  static getMm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mm",
  })
  @post("{id}")
  static createMm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
