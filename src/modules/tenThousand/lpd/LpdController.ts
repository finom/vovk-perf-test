import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpd")
export default class LpdController {
  @operation({
    summary: "Get Lpd",
  })
  @get()
  static getLpd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lpd",
  })
  @post("{id}")
  static createLpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
