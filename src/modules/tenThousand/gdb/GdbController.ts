import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gdb")
export default class GdbController {
  @operation({
    summary: "Get Gdb",
  })
  @get()
  static getGdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gdb",
  })
  @post("{id}")
  static createGdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
