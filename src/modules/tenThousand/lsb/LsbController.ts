import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsb")
export default class LsbController {
  @operation({
    summary: "Get Lsb",
  })
  @get()
  static getLsb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lsb",
  })
  @post("{id}")
  static createLsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
