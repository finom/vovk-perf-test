import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gns")
export default class GnsController {
  @operation({
    summary: "Get Gns",
  })
  @get()
  static getGns = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gns",
  })
  @post("{id}")
  static createGns = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
