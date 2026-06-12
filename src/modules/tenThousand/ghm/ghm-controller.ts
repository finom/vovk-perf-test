import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ghm")
export default class GhmController {
  @operation({
    summary: "Get Ghm",
  })
  @get()
  static getGhm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ghm",
  })
  @post("{id}")
  static createGhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
