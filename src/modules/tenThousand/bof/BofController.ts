import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bof")
export default class BofController {
  @operation({
    summary: "Get Bof",
  })
  @get()
  static getBof = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bof",
  })
  @post("{id}")
  static createBof = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
