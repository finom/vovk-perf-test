import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmi")
export default class LmiController {
  @operation({
    summary: "Get Lmi",
  })
  @get()
  static getLmi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lmi",
  })
  @post("{id}")
  static createLmi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
