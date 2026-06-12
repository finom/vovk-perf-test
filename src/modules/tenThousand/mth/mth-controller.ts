import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mth")
export default class MthController {
  @operation({
    summary: "Get Mth",
  })
  @get()
  static getMth = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mth",
  })
  @post("{id}")
  static createMth = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
