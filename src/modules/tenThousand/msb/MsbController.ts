import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("msb")
export default class MsbController {
  @operation({
    summary: "Get Msb",
  })
  @get()
  static getMsb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Msb",
  })
  @post("{id}")
  static createMsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
