import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eph")
export default class EphController {
  @operation({
    summary: "Get Eph",
  })
  @get()
  static getEph = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eph",
  })
  @post("{id}")
  static createEph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
