import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfs")
export default class GfsController {
  @operation({
    summary: "Get Gfs",
  })
  @get()
  static getGfs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gfs",
  })
  @post("{id}")
  static createGfs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
