import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lrl")
export default class LrlController {
  @operation({
    summary: "Get Lrl",
  })
  @get()
  static getLrl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lrl",
  })
  @post("{id}")
  static createLrl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
