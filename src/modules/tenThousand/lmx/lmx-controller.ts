import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lmx")
export default class LmxController {
  @operation({
    summary: "Get Lmx",
  })
  @get()
  static getLmx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lmx",
  })
  @post("{id}")
  static createLmx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
