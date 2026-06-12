import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gqm")
export default class GqmController {
  @operation({
    summary: "Get Gqm",
  })
  @get()
  static getGqm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gqm",
  })
  @post("{id}")
  static createGqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
