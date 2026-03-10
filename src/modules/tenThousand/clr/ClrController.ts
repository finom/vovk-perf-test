import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clr")
export default class ClrController {
  @operation({
    summary: "Get Clr",
  })
  @get()
  static getClr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Clr",
  })
  @post("{id}")
  static createClr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
