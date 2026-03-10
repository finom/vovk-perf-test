import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gre")
export default class GreController {
  @operation({
    summary: "Get Gre",
  })
  @get()
  static getGre = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gre",
  })
  @post("{id}")
  static createGre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
