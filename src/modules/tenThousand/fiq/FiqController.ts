import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fiq")
export default class FiqController {
  @operation({
    summary: "Get Fiq",
  })
  @get()
  static getFiq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fiq",
  })
  @post("{id}")
  static createFiq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
