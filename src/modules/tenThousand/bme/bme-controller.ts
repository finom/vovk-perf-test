import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bme")
export default class BmeController {
  @operation({
    summary: "Get Bme",
  })
  @get()
  static getBme = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bme",
  })
  @post("{id}")
  static createBme = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
