import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fti")
export default class FtiController {
  @operation({
    summary: "Get Fti",
  })
  @get()
  static getFti = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fti",
  })
  @post("{id}")
  static createFti = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
