import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jft")
export default class JftController {
  @operation({
    summary: "Get Jft",
  })
  @get()
  static getJft = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jft",
  })
  @post("{id}")
  static createJft = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
