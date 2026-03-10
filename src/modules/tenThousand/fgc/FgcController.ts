import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgc")
export default class FgcController {
  @operation({
    summary: "Get Fgc",
  })
  @get()
  static getFgc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fgc",
  })
  @post("{id}")
  static createFgc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
