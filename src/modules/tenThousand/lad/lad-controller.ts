import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lad")
export default class LadController {
  @operation({
    summary: "Get Lad",
  })
  @get()
  static getLad = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lad",
  })
  @post("{id}")
  static createLad = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
