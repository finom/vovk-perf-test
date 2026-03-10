import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ass")
export default class AssController {
  @operation({
    summary: "Get Ass",
  })
  @get()
  static getAss = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ass",
  })
  @post("{id}")
  static createAss = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
