import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kph")
export default class KphController {
  @operation({
    summary: "Get Kph",
  })
  @get()
  static getKph = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kph",
  })
  @post("{id}")
  static createKph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
