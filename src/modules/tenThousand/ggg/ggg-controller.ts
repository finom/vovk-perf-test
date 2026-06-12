import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggg")
export default class GggController {
  @operation({
    summary: "Get Ggg",
  })
  @get()
  static getGgg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ggg",
  })
  @post("{id}")
  static createGgg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
