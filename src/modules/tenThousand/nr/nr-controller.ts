import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nr")
export default class NrController {
  @operation({
    summary: "Get Nr",
  })
  @get()
  static getNr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nr",
  })
  @post("{id}")
  static createNr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
