import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cza")
export default class CzaController {
  @operation({
    summary: "Get Cza",
  })
  @get()
  static getCza = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cza",
  })
  @post("{id}")
  static createCza = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
