import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mco")
export default class McoController {
  @operation({
    summary: "Get Mco",
  })
  @get()
  static getMco = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mco",
  })
  @post("{id}")
  static createMco = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
