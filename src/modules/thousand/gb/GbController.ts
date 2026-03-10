import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gb")
export default class GbController {
  @operation({
    summary: "Get Gb",
  })
  @get()
  static getGb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gb",
  })
  @post("{id}")
  static createGb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
