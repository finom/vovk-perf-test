import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kff")
export default class KffController {
  @operation({
    summary: "Get Kff",
  })
  @get()
  static getKff = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kff",
  })
  @post("{id}")
  static createKff = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
