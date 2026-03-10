import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mga")
export default class MgaController {
  @operation({
    summary: "Get Mga",
  })
  @get()
  static getMga = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mga",
  })
  @post("{id}")
  static createMga = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
