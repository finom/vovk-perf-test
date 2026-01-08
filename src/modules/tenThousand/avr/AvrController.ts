import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avr")
export default class AvrController {
  @operation({
    summary: "Get Avr",
  })
  @get()
  static getAvr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avr",
  })
  @post("{id}")
  static createAvr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
