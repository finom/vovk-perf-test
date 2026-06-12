import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jyb")
export default class JybController {
  @operation({
    summary: "Get Jyb",
  })
  @get()
  static getJyb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jyb",
  })
  @post("{id}")
  static createJyb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
