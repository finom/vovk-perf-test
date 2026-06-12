import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsq")
export default class LsqController {
  @operation({
    summary: "Get Lsq",
  })
  @get()
  static getLsq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lsq",
  })
  @post("{id}")
  static createLsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
