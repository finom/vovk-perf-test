import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bvl")
export default class BvlController {
  @operation({
    summary: "Get Bvl",
  })
  @get()
  static getBvl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bvl",
  })
  @post("{id}")
  static createBvl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
