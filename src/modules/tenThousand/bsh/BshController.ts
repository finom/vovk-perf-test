import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bsh")
export default class BshController {
  @operation({
    summary: "Get Bsh",
  })
  @get()
  static getBsh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bsh",
  })
  @post("{id}")
  static createBsh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
