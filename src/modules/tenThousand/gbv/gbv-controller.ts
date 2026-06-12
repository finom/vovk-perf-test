import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbv")
export default class GbvController {
  @operation({
    summary: "Get Gbv",
  })
  @get()
  static getGbv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbv",
  })
  @post("{id}")
  static createGbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
