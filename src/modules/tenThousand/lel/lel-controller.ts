import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lel")
export default class LelController {
  @operation({
    summary: "Get Lel",
  })
  @get()
  static getLel = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lel",
  })
  @post("{id}")
  static createLel = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
