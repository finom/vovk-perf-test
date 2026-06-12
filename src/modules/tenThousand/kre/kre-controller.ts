import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kre")
export default class KreController {
  @operation({
    summary: "Get Kre",
  })
  @get()
  static getKre = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kre",
  })
  @post("{id}")
  static createKre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
