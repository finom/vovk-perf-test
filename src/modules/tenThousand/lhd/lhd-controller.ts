import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhd")
export default class LhdController {
  @operation({
    summary: "Get Lhd",
  })
  @get()
  static getLhd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhd",
  })
  @post("{id}")
  static createLhd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
