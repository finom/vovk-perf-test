import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cuz")
export default class CuzController {
  @operation({
    summary: "Get Cuz",
  })
  @get()
  static getCuz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Cuz",
  })
  @post("{id}")
  static createCuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
