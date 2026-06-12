import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jpl")
export default class JplController {
  @operation({
    summary: "Get Jpl",
  })
  @get()
  static getJpl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jpl",
  })
  @post("{id}")
  static createJpl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
