import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kgi")
export default class KgiController {
  @operation({
    summary: "Get Kgi",
  })
  @get()
  static getKgi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kgi",
  })
  @post("{id}")
  static createKgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
