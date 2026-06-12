import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mpa")
export default class MpaController {
  @operation({
    summary: "Get Mpa",
  })
  @get()
  static getMpa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mpa",
  })
  @post("{id}")
  static createMpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
