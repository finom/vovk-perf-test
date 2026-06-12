import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mcu")
export default class McuController {
  @operation({
    summary: "Get Mcu",
  })
  @get()
  static getMcu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mcu",
  })
  @post("{id}")
  static createMcu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
