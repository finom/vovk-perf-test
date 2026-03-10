import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gau")
export default class GauController {
  @operation({
    summary: "Get Gau",
  })
  @get()
  static getGau = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gau",
  })
  @post("{id}")
  static createGau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
