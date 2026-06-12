import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngt")
export default class NgtController {
  @operation({
    summary: "Get Ngt",
  })
  @get()
  static getNgt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ngt",
  })
  @post("{id}")
  static createNgt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
