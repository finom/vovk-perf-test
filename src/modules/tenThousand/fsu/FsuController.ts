import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fsu")
export default class FsuController {
  @operation({
    summary: "Get Fsu",
  })
  @get()
  static getFsu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fsu",
  })
  @post("{id}")
  static createFsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
