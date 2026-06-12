import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mmi")
export default class MmiController {
  @operation({
    summary: "Get Mmi",
  })
  @get()
  static getMmi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mmi",
  })
  @post("{id}")
  static createMmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
