import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hea")
export default class HeaController {
  @operation({
    summary: "Get Hea",
  })
  @get()
  static getHea = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hea",
  })
  @post("{id}")
  static createHea = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
