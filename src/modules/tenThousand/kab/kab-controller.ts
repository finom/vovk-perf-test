import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kab")
export default class KabController {
  @operation({
    summary: "Get Kab",
  })
  @get()
  static getKab = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kab",
  })
  @post("{id}")
  static createKab = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
