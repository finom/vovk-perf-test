import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffa")
export default class FfaController {
  @operation({
    summary: "Get Ffa",
  })
  @get()
  static getFfa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffa",
  })
  @post("{id}")
  static createFfa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
