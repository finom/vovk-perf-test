import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lir")
export default class LirController {
  @operation({
    summary: "Get Lir",
  })
  @get()
  static getLir = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lir",
  })
  @post("{id}")
  static createLir = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
