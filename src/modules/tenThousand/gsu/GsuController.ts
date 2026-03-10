import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gsu")
export default class GsuController {
  @operation({
    summary: "Get Gsu",
  })
  @get()
  static getGsu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gsu",
  })
  @post("{id}")
  static createGsu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
