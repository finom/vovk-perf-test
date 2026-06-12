import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bts")
export default class BtsController {
  @operation({
    summary: "Get Bts",
  })
  @get()
  static getBts = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bts",
  })
  @post("{id}")
  static createBts = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
