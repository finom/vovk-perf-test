import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eis")
export default class EisController {
  @operation({
    summary: "Get Eis",
  })
  @get()
  static getEis = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eis",
  })
  @post("{id}")
  static createEis = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
