import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lak")
export default class LakController {
  @operation({
    summary: "Get Lak",
  })
  @get()
  static getLak = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lak",
  })
  @post("{id}")
  static createLak = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
