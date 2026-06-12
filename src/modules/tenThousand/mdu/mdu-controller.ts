import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mdu")
export default class MduController {
  @operation({
    summary: "Get Mdu",
  })
  @get()
  static getMdu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mdu",
  })
  @post("{id}")
  static createMdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
