import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fms")
export default class FmsController {
  @operation({
    summary: "Get Fms",
  })
  @get()
  static getFms = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fms",
  })
  @post("{id}")
  static createFms = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
