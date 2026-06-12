import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("maj")
export default class MajController {
  @operation({
    summary: "Get Maj",
  })
  @get()
  static getMaj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Maj",
  })
  @post("{id}")
  static createMaj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
