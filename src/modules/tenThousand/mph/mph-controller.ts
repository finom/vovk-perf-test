import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mph")
export default class MphController {
  @operation({
    summary: "Get Mph",
  })
  @get()
  static getMph = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mph",
  })
  @post("{id}")
  static createMph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
