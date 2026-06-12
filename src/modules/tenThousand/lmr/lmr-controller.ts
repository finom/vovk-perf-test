import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmr")
export default class LmrController {
  @operation({
    summary: "Get Lmr",
  })
  @get()
  static getLmr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lmr",
  })
  @post("{id}")
  static createLmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
