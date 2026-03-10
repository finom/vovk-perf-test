import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gaa")
export default class GaaController {
  @operation({
    summary: "Get Gaa",
  })
  @get()
  static getGaa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gaa",
  })
  @post("{id}")
  static createGaa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
