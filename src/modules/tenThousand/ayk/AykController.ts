import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayk")
export default class AykController {
  @operation({
    summary: "Get Ayk",
  })
  @get()
  static getAyk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ayk",
  })
  @post("{id}")
  static createAyk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
