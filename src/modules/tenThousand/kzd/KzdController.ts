import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzd")
export default class KzdController {
  @operation({
    summary: "Get Kzd",
  })
  @get()
  static getKzd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzd",
  })
  @post("{id}")
  static createKzd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
