import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("juz")
export default class JuzController {
  @operation({
    summary: "Get Juz",
  })
  @get()
  static getJuz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Juz",
  })
  @post("{id}")
  static createJuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
