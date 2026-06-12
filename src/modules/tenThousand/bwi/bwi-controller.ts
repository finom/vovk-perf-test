import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bwi")
export default class BwiController {
  @operation({
    summary: "Get Bwi",
  })
  @get()
  static getBwi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bwi",
  })
  @post("{id}")
  static createBwi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
