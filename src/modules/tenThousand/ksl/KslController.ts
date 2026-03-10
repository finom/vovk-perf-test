import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ksl")
export default class KslController {
  @operation({
    summary: "Get Ksl",
  })
  @get()
  static getKsl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ksl",
  })
  @post("{id}")
  static createKsl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
