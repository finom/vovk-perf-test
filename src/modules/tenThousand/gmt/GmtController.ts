import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmt")
export default class GmtController {
  @operation({
    summary: "Get Gmt",
  })
  @get()
  static getGmt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmt",
  })
  @post("{id}")
  static createGmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
