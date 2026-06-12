import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ehd")
export default class EhdController {
  @operation({
    summary: "Get Ehd",
  })
  @get()
  static getEhd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ehd",
  })
  @post("{id}")
  static createEhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
