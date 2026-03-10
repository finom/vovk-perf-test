import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lwr")
export default class LwrController {
  @operation({
    summary: "Get Lwr",
  })
  @get()
  static getLwr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lwr",
  })
  @post("{id}")
  static createLwr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
