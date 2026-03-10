import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hpr")
export default class HprController {
  @operation({
    summary: "Get Hpr",
  })
  @get()
  static getHpr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hpr",
  })
  @post("{id}")
  static createHpr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
