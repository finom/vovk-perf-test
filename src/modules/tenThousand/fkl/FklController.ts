import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fkl")
export default class FklController {
  @operation({
    summary: "Get Fkl",
  })
  @get()
  static getFkl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fkl",
  })
  @post("{id}")
  static createFkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
