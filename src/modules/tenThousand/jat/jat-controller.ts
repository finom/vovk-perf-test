import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jat")
export default class JatController {
  @operation({
    summary: "Get Jat",
  })
  @get()
  static getJat = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jat",
  })
  @post("{id}")
  static createJat = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
