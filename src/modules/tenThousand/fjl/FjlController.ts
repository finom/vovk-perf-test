import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fjl")
export default class FjlController {
  @operation({
    summary: "Get Fjl",
  })
  @get()
  static getFjl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fjl",
  })
  @post("{id}")
  static createFjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
