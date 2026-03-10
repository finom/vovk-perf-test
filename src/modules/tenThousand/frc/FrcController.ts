import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frc")
export default class FrcController {
  @operation({
    summary: "Get Frc",
  })
  @get()
  static getFrc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frc",
  })
  @post("{id}")
  static createFrc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
