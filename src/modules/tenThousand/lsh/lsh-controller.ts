import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lsh")
export default class LshController {
  @operation({
    summary: "Get Lsh",
  })
  @get()
  static getLsh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lsh",
  })
  @post("{id}")
  static createLsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
