import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nes")
export default class NesController {
  @operation({
    summary: "Get Nes",
  })
  @get()
  static getNes = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nes",
  })
  @post("{id}")
  static createNes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
