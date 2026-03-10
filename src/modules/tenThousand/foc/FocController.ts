import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("foc")
export default class FocController {
  @operation({
    summary: "Get Foc",
  })
  @get()
  static getFoc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Foc",
  })
  @post("{id}")
  static createFoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
