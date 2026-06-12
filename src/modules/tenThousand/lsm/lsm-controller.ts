import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsm")
export default class LsmController {
  @operation({
    summary: "Get Lsm",
  })
  @get()
  static getLsm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lsm",
  })
  @post("{id}")
  static createLsm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
