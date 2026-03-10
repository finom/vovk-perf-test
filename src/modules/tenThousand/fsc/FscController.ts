import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsc")
export default class FscController {
  @operation({
    summary: "Get Fsc",
  })
  @get()
  static getFsc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsc",
  })
  @post("{id}")
  static createFsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
