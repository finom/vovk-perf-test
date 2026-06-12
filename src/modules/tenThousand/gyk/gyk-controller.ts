import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gyk")
export default class GykController {
  @operation({
    summary: "Get Gyk",
  })
  @get()
  static getGyk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gyk",
  })
  @post("{id}")
  static createGyk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
