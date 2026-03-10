import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lhe")
export default class LheController {
  @operation({
    summary: "Get Lhe",
  })
  @get()
  static getLhe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lhe",
  })
  @post("{id}")
  static createLhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
