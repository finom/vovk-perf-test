import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuh")
export default class KuhController {
  @operation({
    summary: "Get Kuh",
  })
  @get()
  static getKuh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kuh",
  })
  @post("{id}")
  static createKuh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
