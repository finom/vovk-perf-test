import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsn")
export default class GsnController {
  @operation({
    summary: "Get Gsn",
  })
  @get()
  static getGsn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gsn",
  })
  @post("{id}")
  static createGsn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
