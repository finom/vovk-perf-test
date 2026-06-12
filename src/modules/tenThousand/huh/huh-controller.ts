import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("huh")
export default class HuhController {
  @operation({
    summary: "Get Huh",
  })
  @get()
  static getHuh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Huh",
  })
  @post("{id}")
  static createHuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
