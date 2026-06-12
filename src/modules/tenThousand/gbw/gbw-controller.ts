import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbw")
export default class GbwController {
  @operation({
    summary: "Get Gbw",
  })
  @get()
  static getGbw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbw",
  })
  @post("{id}")
  static createGbw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
