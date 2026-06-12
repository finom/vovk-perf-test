import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fuz")
export default class FuzController {
  @operation({
    summary: "Get Fuz",
  })
  @get()
  static getFuz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fuz",
  })
  @post("{id}")
  static createFuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
